/**
 * Created by Abdallah on 7/7/2017.
 */
/*modules*/
import axios from 'axios';
/*Components*/
import {APIConstants} from '../../utils';

export const GET_RESTAURANTS = "GET_RESTAURANTS";
export const GET_RESTAURANT = "GET_RESTAURANT";


export function getRestaurants(search) {
    return function (dispatch) {
        let path = (search) ? APIConstants.GET_RESTAURANTS : APIConstants.GET_RESTAURANTS + "?search=" + search;
        axios.get(path)
            .then(res => {
                dispatch({
                    type: GET_RESTAURANTS,
                    payload: res.data.data
                })
            });
    }
}

export function getRestaurant(id) {
    return function (dispatch) {
        axios.get(APIConstants.GET_RESTAURANTS + "/" + id)
            .then(res => {
                dispatch({
                    type: GET_RESTAURANT,
                    payload: res.data.data
                })
            });
    }

}
