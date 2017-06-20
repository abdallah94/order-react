/**
 * Created by Fujitsu on 6/20/2017.
 */

import {RestaurantMainComponent} from './RestaurantMainComponent';

import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {}
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

let RestaurantMainComponentContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantMainComponent);
export {RestaurantMainComponentContainer};
