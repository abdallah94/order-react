/**
 * Created by Fujitsu on 8/5/2017.
 */


import {ChooseCheckoutModal} from './ChooseCheckoutModal';
import {addRestaurant, chooseCheckoutType} from '../actions';

import {connect} from 'react-redux';

let mapStateToProps = (state, ownProps) => {
    return {
        showModal: ownProps.show,
    }
};

let mapDispatchToProps = (dispatch, ownState) => {
    return {
        close: () => {
            ownState.close();
        },
        chooseCheckoutType: (type)=>{
            dispatch(chooseCheckoutType(type))
        }
    }
};

let ChooseCheckoutModalContainer = connect(mapStateToProps, mapDispatchToProps)(ChooseCheckoutModal);
export {ChooseCheckoutModalContainer};
