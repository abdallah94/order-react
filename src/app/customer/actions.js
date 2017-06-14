/**
 * Created by omar on 6/6/2017.
 */
/*modules*/
/*Components*/

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

//this action uses fetch instead of redux-JSON-API because the API doesn't follow the standards
export function addItem(id, number, price, name, restaurantID) {
    return ({
        type: ADD_ITEM,
        payload: {
            id: id,
            number: number,
            price: price,
            name: name,
            restaurantID,
        }
    });
}
