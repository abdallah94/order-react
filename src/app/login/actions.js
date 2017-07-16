/**
 * Created by Abdallah on 4/24/2017.
 */

import axios from 'axios';
import alertify from 'alertify.js';
import i18next from 'i18next';
import {browserHistory} from 'react-router';

import {Constants, setCookie, removeCookie, APIConstants, PathConstants} from '../../utils';

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function loginFunction(email, password) {
    return function (dispatch) {
        axios.post(APIConstants.LOGIN, {
            email: email,
            password: password
        }).then(res => {
            if (res.data.error) {
                alertify.logPosition('top right');
                alertify.error(i18next.t("LOGIN_WRONG_CREDENTIALS_MESSAGE"));
            }
            else {
                dispatch(loginAction(res.data.user.role, res.data.user.id, res.data.token));
                if (res.data.user.role === Constants.ADMIN) {
                    browserHistory.push(PathConstants.PATH_APP_ADMIN);
                }
                else {
                    if (res.data.user.role === Constants.RESTAURANT) {
                        browserHistory.push(PathConstants.PATH_APP_RESTAURANT);
                    }
                }
            }
        }, err => {
            alertify.logPosition('top right');
            alertify.error(i18next.t("LOGIN_WRONG_CREDENTIALS_MESSAGE"));
        });
    }
}
export function loginAction(role, id, token) {
    let loginInfo = {role: role, id: id, token: token};
    setCookie(Constants.LOGIN_COOKIE, loginInfo);
    return {
        type: LOGIN,
        payload: {
            role: role,
            id: id,
            token: token,
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
            token: "",
            loggedIn: false,
        }
    }
}