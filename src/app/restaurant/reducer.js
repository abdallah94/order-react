/**
 * Created by Abdallah on 4/24/2017.
 */

import {GET_ORDERS, GET_ORDER,GET_CATEGORY} from './actions';
export function orders(state = {}, action) {
    switch (action.type) {
        case GET_ORDERS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export function order(state = {}, action) {
    switch (action.type) {
        case GET_ORDER:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export function categories(state = {}, action) {
    switch (action.type) {
        case GET_CATEGORY:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
