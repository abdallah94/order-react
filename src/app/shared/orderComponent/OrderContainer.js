/**
 * Created by Fujitsu on 6/3/2017.
 */

/* Components */
import {Order} from "./Order";
import {Constants} from '../../../utils';

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
        addOrder: (id, num) => {//TODO: add calling API and navigating to retaurant page

        }
    }
};

let OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Order);
OrderContainer.defaultProps = {
    id: -1,
    imageUrl: Constants.FOOD_IMG,
    name: "Awesome Restaurant",
    deliveryTime: 50,
    rating: 4,
    phoneNum: "097256848972",
    minOrder: 40,
};
export {OrderContainer};
