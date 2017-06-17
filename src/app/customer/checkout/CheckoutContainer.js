/**
 * Created by Fujitsu on 6/17/2017.
 */

import {Checkout} from './Checkout';

import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToPops = (dispatch) => {
    return {}
};

const CheckoutContainer = connect(mapStateToProps, mapDispatchToPops)(Checkout);
export {CheckoutContainer};
