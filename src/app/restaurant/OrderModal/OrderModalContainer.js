/**
 * Created by Fujitsu on 8/5/2017.
 */


import {OrderModal} from './OrderModal';
import {addItem, editItem} from '../';

import {connect} from 'react-redux';

let mapStateToProps = (state, ownProps) => {
    return {
        restaurantID: ownProps.restaurantID,
        newOrder: ownProps.newOrder,
        itemID: ownProps.itemID,
        name: ownProps.name,
        price: ownProps.price,
        description: ownProps.description,
        showModal: ownProps.show,
        image: ownProps.image,
    }
};

let mapDispatchToProps = (dispatch, ownState) => {
    return {
        close: () => {
            ownState.close();
        },
        addOrder: (values, successCallback) => {
            dispatch(addItem(values, successCallback));

        },
        editOrder: (values, successCallback) => {
            dispatch(editItem(values, successCallback));

        }
    }
};

let OrderModalContainer = connect(mapStateToProps, mapDispatchToProps)(OrderModal);
export {OrderModalContainer};
