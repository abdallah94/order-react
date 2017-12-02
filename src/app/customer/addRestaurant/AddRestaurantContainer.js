import {AddRestaurant} from './AddRestaurant';
import {submitOrder} from '../';

import {connect} from 'react-redux';
import {submitRequest} from "../actions";


const mapStateToProps = (state) => {

    return {

    }
};

const mapDispatchToPops = (dispatch) => {
    return {
        submitRequest: (data,successCallback) => {
            dispatch(submitRequest(data,successCallback));
        }
    }
};

const AddRestaurantContainer = connect(mapStateToProps, mapDispatchToPops)(AddRestaurant);
export {AddRestaurantContainer};