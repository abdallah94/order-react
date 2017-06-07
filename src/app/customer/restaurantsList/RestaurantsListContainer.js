/**
 * Created by Fujitsu on 5/18/2017.
 */

/* Components */
import {RestaurantsList} from "./RestaurantsList";
import {Constants} from '../../../utils';

/* Modules */
import {connect} from "react-redux";
 
const mapStateToProps = (state, ownProps) => {
    let searchName = ownProps.location.query.name;//TODO:use value to get data from api;
    return {//TODO:remove dummy data
        restaurants: ownProps.restaurants,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

let RestaurantsListContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);

RestaurantsListContainer.defaultProps = {
    restaurants: [
        {
            id: 0,
            imageUrl: Constants.FOOD_IMG,
            name: "Awesome Restaurant",
            deliveryTime: 10,
            rating: 1,
            phoneNum: "097256848972",
            minOrder: 20,
        },
        {
            id: 1,
            imageUrl: Constants.OFFER_1,
            name: "Another Restaurant",
            deliveryTime: 20,
            rating: 2,
            phoneNum: "097256848972",
            minOrder: 30,
        },
        {
            id: 2,
            imageUrl: Constants.OFFER_2,
            name: "Yet another restaurant!",
            deliveryTime: 30,
            rating: 3,
            phoneNum: "097256848972",
            minOrder: 40,
        },
        {
            id: 3,
            imageUrl: Constants.OFFER_3,
            name: "last one :P",
            deliveryTime: 40,
            rating: 4,
            phoneNum: "097256848972",
            minOrder: 50,
        },

    ]
};

export {RestaurantsListContainer};