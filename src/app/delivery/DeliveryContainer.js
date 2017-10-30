/**
 * Created by Fujitsu on 6/20/2017.
 */

import {Delivery} from './Delivery';

import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        role: state.login.role,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

let DeliveryContainer = connect(mapStateToProps, mapDispatchToProps)(Delivery);
export {DeliveryContainer};
