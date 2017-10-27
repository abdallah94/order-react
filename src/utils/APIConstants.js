/**
 * Created by Fujitsu on 7/8/2017.
 */
import {Config} from '../Config';
export const APIConstants = {
    GET_RESTAURANTS: Config.SERVER_HOST_URL + Config.SERVER_PATH_URL + "restaurant",
    LOGIN: Config.SERVER_HOST_URL + Config.SERVER_PATH_URL + "login",
    GET_ORDERS: Config.SERVER_HOST_URL + Config.SERVER_PATH_URL + "order",
    GET_ITEMS: Config.SERVER_HOST_URL + Config.SERVER_PATH_URL + "item",
    SUBSCRIBE: Config.SERVER_HOST_URL + Config.SERVER_PATH_URL + "subscribe",
};