/**
 * Created by Abdallah on 6/6/2017.
 */
/*modules*/
import axios from 'axios';
import alertify from 'alertify.js';
import i18next from 'i18next';
/*Components*/
import {APIConstants} from '../../utils';

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const EDIT_NUM_ITEMS = "EDIT_NUM_ITEMS";
export const RESET_CART = "REST_CART";
export const SUCCESSFULL_ORDER = "SUCCESSFULL_ORDER";
export const CHOOSE_AREA = "CHOOSE_AREA";
export const LOAD_AREAS = "LOAD_AREAS";
export const LOAD_CUISINES = "LOAD_CUISINES";
export const CHOOSE_CUISINE = "CHOOSE_CUISINE";
//this action uses fetch instead of redux-JSON-API because the API doesn't follow the standards
export function addItem(id, number, price, name, restaurantID, minOrder, deliveryTime, deliveryFee, restaurantName, size, extras) {
    return ({
        type: ADD_ITEM,
        payload: {
            id: id,
            number: number,
            price: price,
            name: name,
            restaurantID: restaurantID,
            minOrder: minOrder,
            deliveryTime: deliveryTime,
            deliveryFee: deliveryFee,
            restaurantName: restaurantName,
            size: size,
            extras: extras
        }
    });
}

export function editNumberOfItems(id, number, price, name, restaurantID, minOrder, deliveryTime, deliveryFee, restaurantName, size, extras) {
    return ({
        type: EDIT_NUM_ITEMS,
        payload: {
            id: id,
            number: number,
            price: price,
            name: name,
            restaurantID: restaurantID,
            minOrder: minOrder,
            deliveryTime: deliveryTime,
            deliveryFee: deliveryFee,
            restaurantName: restaurantName,
            size: size,
            extras: extras
        }
    });
}

export function resetCart() {
    return ({
        type: RESET_CART,
    });
}

export function submitOrder(data) {
    return function (dispatch, getState) {
        var config = {
            headers: {'Authorization': getState().login.token}
        };
        axios.post(APIConstants.GET_ORDERS, data, config).then(() => {
            dispatch(orderSuccess());
        }, (err) => {
        })
    }
}

export function submitRequest(data,successCallback) {
    return function (dispatch, getState) {
        var config = {
            headers: {'Authorization': getState().login.token}
        };
        axios.post(APIConstants.ADD_RESTAURANT, data, config).then(() => {
           successCallback();
        }, (err) => {
        })
    }
}

function orderSuccess() {
    return {
        type: SUCCESSFULL_ORDER,
        payload: {orderSubmitted: true}
    }
}

export function subscribe(data) {
    return function (dispatch, getState) {
        var config = {
            headers: {'Authorization': getState().login.token}
        };
        axios.post(APIConstants.SUBSCRIBE, data, config).then(() => {
            alertify.logPosition('top right');
            alertify.success(i18next.t("SUBSCRIBED_SUCCESSFULLY"));
        }, (err) => {
            alertify.logPosition('top right');
            alertify.success(i18next.t("GENERAL_SERVER_ERROR"));
        })
    }
}

export function chooseArea(area) {
    return {
        type: CHOOSE_AREA,
        payload: {area: area}
    }
}

export function loadAreas() {
    let array = [{value: 0, label: i18next.t("CHOOSE_AREA"), disabled: true},
        {value: 1, label: i18next.t("TIREH"), disabled: false},
        {value: 2, label: i18next.t("AL_MANARA"), disabled: false},
        {value: 3, label: i18next.t("AL_MASYOON"), disabled: false},
        {value: 4, label: i18next.t("AL_ERSAL"), disabled: false},
        {value: 5, label: i18next.t("AL_BALOU"), disabled: false},
        {value: 6, label: i18next.t("SURDA"), disabled: false},
        {value: 7, label: i18next.t("BIRZEIT"), disabled: false},
        {value: 8, label: i18next.t("AL_RIHAN"), disabled: false},
        {value: 9, label: i18next.t("RAWABI"), disabled: false},
        {value: 10, label: i18next.t("BEITUNIA"), disabled: false},
        {value: 11, label: i18next.t("AL_BIREH"), disabled: false},
        {value: 12, label: i18next.t("KFOR_AQAB"), disabled: false},
        {value: 13, label: i18next.t("QALANDIA"), disabled: false},
        {value: 14, label: i18next.t("AL_JALAZONE"), disabled: false}];
    return {
        type: LOAD_AREAS,
        payload: {areas: array}
    }
}

export function loadCuisineTypes() {
    let array = [{value: 0, label: i18next.t("TYPE_OF_CUISINE"), disabled: true},
        {value: 1, label: "Sandwich", disabled: false},
        {value: 2, label: "Sweet", disabled: false}];
    return {
        type: LOAD_CUISINES,
        payload: {types: array}
    }
}

export function chooseType(type) {
    return {
        type: CHOOSE_CUISINE,
        payload: {type: type}
    }
}
