/**
 * Created by Fujitsu on 6/6/2017.
 */
/* Components */
import {Menu} from "./Menu";
import {Constants} from '../../../utils';
/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        restaurantID: ownProps.id,
        edit: (ownProps.role === "RESTAURANT"),//TODO:change to value from API
        //items: state.restaurant.items,//TODO:uncommint when adding API
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: (restaurantID) => {//TODO:ADD API

        }
    }
};

let MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);
MenuContainer.defaultProps = {
    restaurantID: -1,
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
export {MenuContainer};
