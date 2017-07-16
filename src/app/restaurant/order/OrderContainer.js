/**
 * Created by Fujitsu on 7/16/2017.
 */

import {Order} from './Order';
import {getOrder} from '../';

import {connect} from 'react-redux';

let mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        role: state.login.role,
        orderID: ownProps.params.id,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getOrder: (orderID) => {
            dispatch(getOrder(orderID));
        }
    }
};

let OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Order);
export {OrderContainer};
