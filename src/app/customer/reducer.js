/**
 * Created by Abdallah on 6/6/2017.
 */
import {
    ADD_ITEM, REMOVE_ITEM, EDIT_NUM_ITEMS, RESET_CART, SUCCESSFULL_ORDER, CHOOSE_AREA, LOAD_AREAS, CHOOSE_CUISINE,
    LOAD_CUISINES, RATING, CHECKOUT_TYPE, SET_DELIVERY
} from "./actions";
import {calulateItemsSum} from "../../utils";

import alertify from 'alertify.js';
import i18next from 'i18next';
import {APIConstants} from "../../utils/APIConstants";
import Constants from "../../utils/Constants";

const initialState = {
    items: [],
    sum: 0,
    restaurantName: "",
    restaurantID: -1,
    minOrder: 0,
    total: 0,
    deliveryTime: 0,
    deliveryFee: 0,
    orderSubmitted: false,
};

function cart(state = initialState, action) {
    let items = null;
    switch (action.type) {
        case ADD_ITEM:
            items = editItem(true, state.items, action.payload, state.restaurantID);
            state.items = [];
            return Object.assign({}, state, items);
        case EDIT_NUM_ITEMS:
            items = editItem(false, state.items, action.payload, state.restaurantID);
            state.items = [];
            return Object.assign({}, state, items);
        case RESET_CART:
            return initialState;
        case SET_DELIVERY:
            return Object.assign({}, state, action.payload);
        case SUCCESSFULL_ORDER:
            return Object.assign({}, state, action.payload);
        case REMOVE_ITEM:
            break;
        default:
            return state;
    }
}

function editItem(addItems, items, payload, restaurantID) {
    let tempItems = [];
    let added = false;
    if (restaurantID !== -1 && payload.restaurantID !== restaurantID) {//TODO:Add error discard changes
        alertify.logPosition('bottom right');
        alertify.error(i18next.t("ERROR_ITEMS_FROM_DIFFERENT_RESTAURANT"));
        return;
    }

    items.map((item, i) => {
        if (item.id === payload.id && (!payload.size && !item.size || (payload.size && payload.size === item.size))) {
            if (!(item.extras && item.extras.length) && !(payload.extras && payload.extras.length)) {//both empty
                if (addItems) {
                    item.number += payload.number;
                }
                else {
                    item.number = payload.number;
                }
                added = true;
            }
            else {
                //both have values
                console.log(item);
                console.log(payload);
                if (!((item.extras && item.extras.length && !(payload.extras && payload.extras.length)) || (!(item.extras && item.extras.length) && (payload.extras && payload.extras.length)))) {
                    let match = true;
                    let splitExtras = item.extras.split(",");
                    payload.extras.map((extra) => {
                        let extraExist = false;
                        splitExtras.map((splitExtra) => {
                            if (splitExtra === extra) {
                                extraExist = true;
                            }
                        });
                        if (!extraExist) {
                            match = false;
                        }
                    });
                    if (match) {
                        if (addItems) {
                            item.number += payload.number;
                        }
                        else {
                            item.number = payload.number;
                        }
                        added = true;
                    }
                }
            }
        }
        if (item.number > 0) {
            tempItems.push(item);
        }
    });
    if (!added) {
        if (payload.extras && payload.extras.length) {
            let splitExtras = payload.extras[0];
            for (let i in payload.extras) {
                if (i != 0) {
                    splitExtras += "," + payload.extras[i];
                }
            }
            payload.extras = splitExtras;
        }
        tempItems.push(payload);
    }
    let sum = calulateItemsSum(tempItems);
    //intialize restaurant info if no items
    let deliveryFee = (sum) ? payload.deliveryFee : 0;
    let newRestaurantID = (sum) ? payload.restaurantID : -1;
    let deliveryTime = (sum) ? payload.deliveryTime : 0;
    let minOrder = (sum) ? payload.sum : 0;
    let restaurantName = (sum) ? payload.restaurantName : "";
    let total = sum + deliveryFee;
    return {
        items: tempItems,
        restaurantID: newRestaurantID,
        sum: sum,
        deliveryTime: deliveryTime,
        minOrder: minOrder,
        deliveryFee: deliveryFee,
        total: total,
        restaurantName: restaurantName,
    };

}

export function area(state = {}, action) {
    switch (action.type) {
        case CHOOSE_AREA:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export function areas(state = {}, action) {
    switch (action.type) {
        case LOAD_AREAS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export function type(state = {}, action) {
    switch (action.type) {
        case CHOOSE_CUISINE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export function types(state = {}, action) {
    switch (action.type) {
        case LOAD_CUISINES:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export function rating(state = {submitted: false}, action) {
    switch (action.type) {
        case
        RATING
        :
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export function checkoutType(state = {type: Constants.DELIVERY}, action) {
    switch (action.type) {
        case CHECKOUT_TYPE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export {cart};
