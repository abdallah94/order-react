/**
 * Created by Fujitsu on 8/5/2017.
 */


import {RestaurantModal} from './RestaurantModal';
import {addRestaurant} from '../actions';

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
        addRestaurant: (values, successCallback) => {
            dispatch(addRestaurant(values, successCallback));

        }
    }
};

let RestaurantModalContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantModal);
export {RestaurantModalContainer};
