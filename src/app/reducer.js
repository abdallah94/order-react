/**
 * Created by Abdallah on 4/23/2017.
 */
import {cart} from "./customer";
import {login} from "./login";
import {restaurant, restaurants} from './shared';
import {START_LOADING, FINISH_LOADING} from "./actions";
import {orders, order} from './restaurant';


import {combineReducers} from "redux";

function loading(state = {isLoading: false}, action) {
    switch (action.type) {
        case START_LOADING:
            return Object.assign({}, state, action.payload);
        case FINISH_LOADING:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

const reducers = combineReducers({cart, login, loading, restaurant, restaurants, order, orders});

export default reducers;