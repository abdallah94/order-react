/**
 * Created by Fujitsu on 6/20/2017.
 */

import {RestaurantMainComponent} from './RestaurantMainComponent';
import {Constants} from '../../../utils';
import {getRestaurant} from '../../shared';

import {connect} from 'react-redux';


let mapStateToProps = (state, ownProps) => {//TODO: Check admin permission or same restaurant
    let restaurantID = (ownProps.params.id) ? (ownProps.params.id) : state.login.restaurant_id;
    return {
        restaurantID: restaurantID,
        edit: (state.login.role === Constants.RESTAURANT || state.login.role === Constants.ADMIN),
        restaurantName: state.restaurant.name,
        phoneNum: state.restaurant.phone,
        items: state.restaurant.items,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: (restaurantID) => {//TODO:ADD API
            dispatch(getRestaurant(restaurantID));

        }
    }
};

let RestaurantMainComponentContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantMainComponent);
RestaurantMainComponentContainer.defaultProps = {
    imageUrl: Constants.OFFER_3,
    restaurantName: "KFC",
    phoneNum: "025467234",
    deliveryTime: 50,
    minOrder: 50,
    rating: 4,
    deliveryFee: 10,
    items: [{
        id: 0,
        name: "menu item 1",
        description: "An awesome Meal with a very long description to test the validity of the design here",
        price: 50,
        imageUrl: Constants.OFFER_4
    },
        {id: 1, name: "menu item 2", description: "An awesome Meal 2", price: 60, imageUrl: Constants.OFFER_3}],
    role: "CUSTOMER",
};
export {RestaurantMainComponentContainer};
