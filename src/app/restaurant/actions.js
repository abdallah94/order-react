/**
 * Created by Abdallah on 4/24/2017.
 */
import {APIConstants} from '../../utils';
import {getRestaurant} from '../shared';

import axios from 'axios';
import alertify from 'alertify.js';
import i18next from 'i18next';
export const GET_ORDERS = "GET_ORDERS";
export const GET_ORDER = "GET_ORDER";
export const GET_CATEGORY = "GET_CATEGORY";

export function getOrders(restaurantID = 0, showLatest = false, isDelivery = false) {
    return function (dispatch, getState) {
        let path = (isDelivery) ? APIConstants.DELIVERY : APIConstants.GET_ORDERS;
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

export function acceptOrder(orderID, successAction) {
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

export function acceptDeliveryOrder(orderID, successAction) {
    return function (dispatch, getState) {
        let path = APIConstants.GET_ORDERS + "/" + orderID;
        var config = {
            headers: {'Authorization': getState().login.token}
        };
        let data = {
            delivery_accepted: true
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

export function editItem(values, successCallback) {
    return function (dispatch, getState) {
        let path = APIConstants.GET_ITEMS + "/" + values.id;
        var config = {
            headers: {'Authorization': getState().login.token}
        };
        let data = values;
        // var form = new FormData();
        // let keys=Object.keys(values);
        // keys.map((key)=>{
        //     form.append(key,values[key]);
        // });
        axios.patch(path, data, config)
            .then(res => {
                dispatch(getRestaurant(values.restaurant_id));
                alertify.logPosition('top right');
                alertify.error(i18next.t("ERROR_TRY_AGAIN_LATER"));
                successCallback();
            }, (error) => {
                alertify.logPosition('top right');
                alertify.error(i18next.t("ERROR_TRY_AGAIN_LATER"));
            });
    }
}

export function addItem(values, successCallback) {
    return function (dispatch, getState) {
        let path = APIConstants.GET_ITEMS;
        var config = {
            headers: {'Authorization': getState().login.token}
        };
        let data = values;
        axios.post(path, data, config)
            .then(res => {
                dispatch(getRestaurant(values.restaurant_id));
                successCallback();
            }, (error) => {
                alertify.logPosition('top right');
                alertify.error(i18next.t("ERROR_TRY_AGAIN_LATER"));
            });
    }
}

export function addCategory(values, successCallback) {
    return function (dispatch, getState) {
        let path = APIConstants.CATEGORY;
        var config = {
            headers: {'Authorization': getState().login.token}
        };
        let data = values;
        axios.post(path, data, config)
            .then(res => {
                successCallback();
            }, (error) => {
                alertify.logPosition('top right');
                alertify.error(i18next.t("ERROR_TRY_AGAIN_LATER"));
            });
    }
}

export function getCategories(restaurantID) {
    return function (dispatch, getState) {
        let path = APIConstants.CATEGORY + "?restaurant_id=" + restaurantID;
        var config = {
            headers: {'Authorization': getState().login.token}
        };
        axios.get(path, config)
            .then(res => {
                dispatch({
                    type: GET_CATEGORY,
                    payload: res.data
                })
            });
    }

}