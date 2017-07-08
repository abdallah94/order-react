/**
 * Created by Fujitsu on 5/18/2017.
 */

/* Components */
import {RestaurantsList} from "./RestaurantsList";
import {Constants} from '../../../utils';
import {getRestaurants} from '../../shared';

/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    let searchName = ownProps.location.query.name;//TODO:use value to get data from api;
    return {//TODO:remove dummy data
        restaurants: state.restaurants.data,
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