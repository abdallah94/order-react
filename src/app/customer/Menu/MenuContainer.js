/**
 * Created by Fujitsu on 6/6/2017.
 */
/* Components */
import {Menu} from "./Menu";
import {Constants} from '../../../utils';
import {getRestaurant} from '../../shared';
/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        restaurantID: ownProps.params.id,
        edit: (state.login.role === Constants.RESTAURANT),
        restaurantName: state.restaurant.name,
        phoneNum: state.restaurant.phone,
        items: state.restaurant.items,
        categories: state.restaurant.categories,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: (restaurantID) => {//TODO:ADD API
            dispatch(getRestaurant(restaurantID));
        }
    }
};

let MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);
MenuContainer.defaultProps = {
    imageUrl: Constants.OFFER_3,
    deliveryTime: 50,
    minOrder: 50,
    rating: 4,
    deliveryFee: 10,
};
export {MenuContainer};
