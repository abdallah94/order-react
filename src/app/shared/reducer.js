/**
 * Created by Abdallah on 7/8/2017.
 */
import {GET_RESTAURANT, GET_RESTAURANTS} from "./actions";

export function restaurants(state = {}, action) {
    switch (action.type) {
        case GET_RESTAURANTS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export function restaurant(state = {}, action) {
    switch (action.type) {
        case GET_RESTAURANT:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
