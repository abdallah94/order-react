/**
 * Created by Fujitsu on 6/3/2017.
 */
/* Components */
import {Order} from "./Order";
import {addItem} from "../../customer";
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
        minOrder: ownProps.minOrder,
        edit:ownProps.edit,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addOrder: (id, number, name, price) => {//TODO: add calling API and navigating to retaurant page
            dispatch(addItem(id, number, price, name));
        }
    }
};

let OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Order);
export {OrderContainer};
