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
                dispatch(loginAction(res.data.user.role, res.data.user.id, res.data.token, res.data.user.restaurant_id));
                if (res.data.user.role === Constants.ADMIN) {
                    browserHistory.push(PathConstants.PATH_APP_ADMIN);
                }
                else {
                    if (res.data.user.role === Constants.RESTAURANT) {
                        browserHistory.push(PathConstants.PATH_APP_RESTAURANT);
                    }
                    else {
                        if (res.data.user.role === Constants.DELIVERY) {
                            browserHistory.push(PathConstants.PATH_APP_DELIVERY);
                        }
                    }
                }
            }
        }, err => {
            alertify.logPosition('top right');
            alertify.error(i18next.t("LOGIN_WRONG_CREDENTIALS_MESSAGE"));
        });
    }
}
export function loginAction(role, id, token, restaurant_id) {
    let loginInfo = {role: role, id: id, token: token, restaurant_id: restaurant_id};
    setCookie(Constants.LOGIN_COOKIE, loginInfo);
    return {
        type: LOGIN,
        payload: {
            role: role,
            id: id,
            token: token,
            restaurant_id: restaurant_id,
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
            restaurant_id: -1,
            loggedIn: false,
        }
    }
}