/**
 * Created by Fujitsu on 6/3/2017.
 */
/* Components */
import {Order} from "./Order";
import {addItem} from "../../customer";
import {Constants} from '../../../utils';
/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.id,
        name: ownProps.name,
        deliveryTime: ownProps.deliveryTime,
        imageUrl: ownProps.image,
        rating: ownProps.rating,
        phoneNum: ownProps.phoneNum,
        minOrder: ownProps.minOrder,
        edit: ownProps.edit,
        restaurantID: ownProps.restaurantID,
        deliveryFee: ownProps.deliveryFee,
        restaurantName: ownProps.restaurantName,
        extras: ownProps.extras,
        maxExtras: ownProps['max_extras']
    }
};

const mapDispatchToProps = (dispatch, ownState) => {
    return {
        addOrder: (id, number, name, price, restaurantID, minOrder, deliveryTime, deliveryFee, restaurantName, size, extras, notes = "") => {//TODO: add calling API and navigating to retaurant page
            dispatch(addItem(id, number, price, name, restaurantID, minOrder, deliveryTime, deliveryFee, restaurantName, size, extras, notes));
        },
        editOrder: (id, name, description, price, image, category, sizes, extras) => {
            ownState.editOrder(id, name, description, price, image, category, sizes, extras);
        }
    }
};

let OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Order);
export {OrderContainer};

OrderContainer.defaultProps = {
    imageUrl: Constants.OFFER_1,
}
