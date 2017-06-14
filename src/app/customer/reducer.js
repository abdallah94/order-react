/**
 * Created by Abdallah on 6/6/2017.
 */
import {combineReducers} from "redux";
import {ADD_ITEM, REMOVE_ITEM} from "./actions";

const initialState = {
    items: [],
    total: 0,
    restaurantID: -1
};

function cart(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            let items = addItem(state.items, action.payload, state.restaurantID);
            return Object.assign({}, state, items);
            break;
        case REMOVE_ITEM:
            break;
        default:
            return state;
    }
}

function addItem(items, payload, restaurantID) {
    let tempItems = [];
    let added = false;
    if (restaurantID !== -1 && payload.restaurantID !== restaurantID) {//TODO:Add error discard changes

    }
    items.map((item, i) => {
        if (item.id === payload.id) {
            item.number += payload.number;
            added = true;
        }
        tempItems.push(item);
    });
    if (!added) {
        tempItems.push(payload);
    }
    return tempItems;

}

export {cart};
