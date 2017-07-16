/**
 * Created by Fujitsu on 6/17/2017.
 */

import {Checkout} from './Checkout';
import {resetCart} from '../';
import {submitOrder} from '../';

import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        ...state.cart,
    }
};

const mapDispatchToPops = (dispatch) => {
    return {
        submitOrder: (data) => {
            dispatch(submitOrder(data));
        },
        resetCart: () => {
            dispatch(resetCart());
        }
    }
};

const CheckoutContainer = connect(mapStateToProps, mapDispatchToPops)(Checkout);
export {CheckoutContainer};
