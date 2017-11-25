/**
 * Created by Fujitsu on 8/5/2017.
 */


import {OrderModal} from './OrderModal';
import {addItem, editItem} from '../';

import {connect} from 'react-redux';
import i18next from 'i18next';
import {getCategories} from "../actions";

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
        categories: getOptions(state.categories.data),
        category: ownProps.category,
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

        },
        fetchCategories: (restaurantID) => {
            dispatch(getCategories(restaurantID));
        }
    }
};

let OrderModalContainer = connect(mapStateToProps, mapDispatchToProps)(OrderModal);
export {OrderModalContainer};

function getOptions(categories) {
    let array = [{value: 0, label: i18next.t("CATEGORY_NAME"), disabled: true}];
    if (categories) {
        for (let i in categories) {
            array.push({value: categories[i].id, label: categories[i].name});
        }
    }
    return array;
}

