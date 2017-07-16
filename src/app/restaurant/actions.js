/**
 * Created by Abdallah on 4/24/2017.
 */
import {APIConstants} from '../../utils';
import axios from 'axios';
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
                path = path + "?show_latest=true";
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