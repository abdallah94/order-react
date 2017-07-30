/**
 * Created by Fujitsu on 5/18/2017.
 */

/* Components */
import {RestaurantsList} from "./RestaurantsList";
import {Constants} from '../../../utils';
import {getRestaurants} from '../../shared';

/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state, ownprops) => {
    console.log(ownprops);
    if (!ownprops.admin) {
        let searchName = ownprops.location.query.name;//TODO:use value to get data from api;
    }
    let admin = (ownprops.admin) ? ownprops.admin : false;
    return {
        restaurants: state.restaurants.data,
        admin: admin,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRestaurants: () => {
            dispatch(getRestaurants(""));
        }
    }
};

let RestaurantsListContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);
export {RestaurantsListContainer};