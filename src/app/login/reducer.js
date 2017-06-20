/**
 * Created by Abdallah on 4/24/2017.
 */

import {LOGIN, LOGOUT} from './actions';

const initialState = {
    role: "customer",
    loggedIn: false,
    id: -1
};

function login(state = initialState, action) {
    switch (action.type) {//TODO add action cases
        case LOGIN:
            return Object.assign({}, state, action.payload);
        case LOGOUT:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export {login};
