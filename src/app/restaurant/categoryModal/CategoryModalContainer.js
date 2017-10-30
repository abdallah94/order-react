/**
 * Created by Fujitsu on 8/5/2017.
 */


import {CategoryModal} from './CategoryModal';
import {addItem, editItem} from '../';

import {connect} from 'react-redux';
import {addCategory} from "../actions";

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
        addCategory: (values, successCallback) => {
            dispatch(addCategory(values, successCallback));
 
        }
    }
};

let CategoryModalContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryModal);
export {CategoryModalContainer};
