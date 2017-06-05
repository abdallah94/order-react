/**
 * Created by Abdallah on 6/6/2017.
 */
import {combineReducers} from "redux";
import {ADD_ITEM, REMOVE_ITEM} from "./actions";

const initialState = {
    items: [],
    total: 0,
};

function cart(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            let items = addItem(state.items, action.payload);
            return Object.assign({}, state, items);
        case REMOVE_ITEM:
        default:
            return state;
    }
}

function addItem(items, payload) {
    let tempItems = [];
    let added = false;
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
