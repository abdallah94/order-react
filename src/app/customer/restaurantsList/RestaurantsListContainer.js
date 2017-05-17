/**
 * Created by Fujitsu on 5/18/2017.
 */
/* Components */
import {RestaurantsList} from "./RestaurantsList";
/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

let RestaurantsListContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);
export {RestaurantsListContainer};