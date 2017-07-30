/**
 * Created by Fujitsu on 7/16/2017.
 */

import {Orders} from './Orders';
import {getOrders} from '../';

import {connect} from 'react-redux';

let mapStateToProps = (state, ownProps) => {
    return {
        role: state.login.role,
        orders: state.orders.data,
        restaurantID: ownProps.params.id,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getOrders: (restaurantID) => {
            dispatch(getOrders(restaurantID));
        }
    }
};

let OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(Orders);
export {OrdersContainer};
