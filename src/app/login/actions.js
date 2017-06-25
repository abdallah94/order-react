/**
 * Created by Abdallah on 4/24/2017.
 */

import {Constants, setCookie, removeCookie} from '../../utils';

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export function loginAction(role, id) {
    let loginInfo = {role: role, id: id};
    setCookie(Constants.LOGIN_COOKIE, loginInfo);
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
    removeCookie(Constants.LOGIN_COOKIE);
    return {
        type: LOGOUT,
        payload: {
            role: Constants.CUSTOMER,
            id: -1,
            loggedIn: false,
        }
    }
}