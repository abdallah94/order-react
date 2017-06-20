/**
 * Created by Fujitsu on 6/20/2017.
 */

import {Restaurant} from './Restaurant';

import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {}
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

let RestaurantContainer = connect(mapStateToProps, mapDispatchToProps)(Restaurant);
export {RestaurantContainer};
