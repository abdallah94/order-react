/**
 * Created by Abdallah on 4/24/2017.
 */
import {APIConstants} from '../../utils';

import axios from 'axios';
import alertify from 'alertify.js';
import i18next from 'i18next';
export const GET_ORDERS = "GET_ORDERS";
export const GET_ORDER = "GET_ORDER";

export function getOrders(restaurantID = 0, showLatest = false) {
    return function (dispatch, getState) {
        let path = APIConstants.GET_ORDERS;
        if (restaurantID) {
            path = path + "?restaurant_id=" + restaurantID;
        }
        if (showLatest) {
            if (restaurantID) {
                path = path + "&show_latest=true"
            }
            else {
                path = path + "?show_latest=false";
            }
        }
        var config = {
            headers: {'Authorization': getState().login.token}
        };
        axios.get(path, config)
            .then(res => {
                dispatch({
                    type: GET_ORDERS,
                    payload: res.data
                })
            });
    }
}

export function getOrder(orderID) {
    return function (dispatch, getState) {
        let path = APIConstants.GET_ORDERS + "/" + orderID;
        var config = {
            headers: {'Authorization': getState().login.token}
        };
        axios.get(path, config)
            .then(res => {
                dispatch({
                    type: GET_ORDER,
                    payload: res.data
                })
            });
    }

}

export function acceptOrder(orderID,successAction) {
    return function (dispatch, getState) {
        let path = APIConstants.GET_ORDERS + "/" + orderID;
        var config = {
            headers: {'Authorization': getState().login.token}
        };
        let data = {
            accepted: true
        };
        axios.patch(path, data, config)
            .then(res => {
                dispatch(successAction);
            }, (error) => {
                alertify.logPosition('top right');
                alertify.error(i18next.t("ERROR_ITEMS_FROM_DIFFERENT_RESTAURANT"));
            });
    }
}