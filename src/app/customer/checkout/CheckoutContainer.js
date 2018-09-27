/**
 * Created by Fujitsu on 6/17/2017.
 */

import {Checkout} from './Checkout';
import {resetCart} from '../';
import {submitOrder} from '../';

import {connect} from 'react-redux';
import {chooseArea, chooseCheckoutType} from "../actions";


const mapStateToProps = (state) => {
    let options = state.areas.areas && state.areas.areas.length ? state.areas.areas : [];
    let area = state.area && state.area.area ? state.area.area : "";
    return {
        ...state.cart,
        options: options,
        area: area,
        checkoutType: state.checkoutType.type
    }
};

const mapDispatchToPops = (dispatch) => {
    return {
        submitOrder: (data) => {
            dispatch(submitOrder(data));
        },
        resetCart: () => {
            dispatch(resetCart());
        },
        chooseArea: (area) => {
            if (area) {
                dispatch(chooseArea(area))
            }
        },
        chooseCheckoutType: (type)=>{
            dispatch(chooseCheckoutType(type))
        }
    }
};

const CheckoutContainer = connect(mapStateToProps, mapDispatchToPops)(Checkout);
export {CheckoutContainer};
