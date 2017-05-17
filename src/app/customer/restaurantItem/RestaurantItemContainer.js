/**
 * Created by Fujitsu on 5/18/2017.
 */
/* Components */
import {RestaurantItem} from "./RestaurantItem";
/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.id,
        name: ownProps.name,
        deliveryTime: ownProps.deliveryTime,
        imageUrl: ownProps.imageUrl,
        rating: ownProps.rating,
        phoneNum: ownProps.phoneNum,
        minOrder: ownProps.minOrder
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        chooseRestaurant: (id, num) => {//TODO: add calling API and navigating to retaurant page

        }
    }
};

let RestaurantItemContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantItem);
export {RestaurantItemContainer};