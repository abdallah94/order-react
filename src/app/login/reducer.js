/**
 * Created by Abdallah on 4/24/2017.
 */
import {combineReducers} from "redux";

const initialState = {};

function login(state = initialState, action) {
    switch (action.type) {//TODO add action cases
        default:
            return state;
    }
}

const loginReducers = combineReducers({login});

export {login};
