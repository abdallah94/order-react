/**
 * Created by Abdallah on 4/24/2017.
 */

import {Constants} from '../../utils';

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export function loginAction(role, id) {
    return {
        type: LOGIN,
        payload: {
            role: role,
            id: id,
            loggedIn: true,
        }
    }
}

export function logoutAction() {
    return {
        type: LOGOUT,
        payload: {
            role: Constants.CUSTOMER,
            id: -1,
            loggedIn: false,
        }
    }
}