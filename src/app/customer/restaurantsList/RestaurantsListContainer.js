/**
 * Created by Fujitsu on 5/18/2017.
 */
/* Components */
import {RestaurantsList} from "./RestaurantsList";
/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    let searchName = ownProps.location.query;//TODO:use value to get data from api;
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

let RestaurantsListContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);
export {RestaurantsListContainer};