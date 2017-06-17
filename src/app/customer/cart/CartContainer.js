/**
 * Created by Fujitsu on 6/7/2017.
 */

/* Components */
import {Cart} from "./Cart";
import {editNumberOfItems} from '../';

/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.cart,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editItemNumber: (id, number, name, price, restaurantID, minOrder, deliveryTime, deliveryFee,restaurantName) => {
            dispatch(editNumberOfItems(id, number, price, name, restaurantID, minOrder, deliveryTime, deliveryFee,restaurantName));
        }
    }
};

let CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);
export {CartContainer};
