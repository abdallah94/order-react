/**
 * Created by Fujitsu on 6/20/2017.
 */

import {RestaurantMainComponent} from './RestaurantMainComponent';
import {Constants} from '../../../utils';

import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        restaurantID: state.login.id,
        edit: (state.login.role === Constants.RESTAURANT),
        //items: state.restaurant.items,//TODO:uncommint when adding API
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: (restaurantID) => {//TODO:ADD API

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
