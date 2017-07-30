/**
 * Created by Fujitsu on 7/16/2017.
 */

import {OrderDetails} from './OrderDetails';
import {getOrder,acceptOrder} from '../';

import {connect} from 'react-redux';

let mapStateToProps = (state, ownProps) => {
    return {
        role: state.login.role,
        orderID: ownProps.params.id,
        order: state.order.data
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getOrder: (orderID) => {
            dispatch(getOrder(orderID));
        },
        acceptOrder:(orderID)=>{
            dispatch(acceptOrder(orderID,getOrder(orderID)));
        }
    }
};

let OrderDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
export {OrderDetailsContainer};
