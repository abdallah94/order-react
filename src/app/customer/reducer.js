/**
 * Created by Abdallah on 6/6/2017.
 */
import {ADD_ITEM, REMOVE_ITEM, EDIT_NUM_ITEMS, RESET_CART, SUCCESSFULL_ORDER} from "./actions";
import {calulateItemsSum} from "../../utils";

import alertify from 'alertify.js';
import i18next from 'i18next';

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
        if (item.id === payload.id) {
            if (addItems) {
                item.number += payload.number;
            }
            else {
                item.number = payload.number;
            }
            added = true;
        }
        if (item.number > 0) {
            tempItems.push(item);
        }
    });
    if (!added) {
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

export {cart};
