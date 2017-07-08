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
    let path = (search) ? APIConstants.GET_RESTAURANTS : APIConstants.GET_RESTAURANTS + "?search=" + search;
    axios.get(path)
        .then(res => {
            console.log(res);
        });
}

export function getRestaurant(id) {
    axios.get(APIConstants.GET_RESTAURANTS + "/" + id)
        .then(res => {
            console.log(res);
        });

}
