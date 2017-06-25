/**
 * Created by Fujitsu on 6/20/2017.
 */

import {Admin} from './Admin';

import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        role: state.login.role
    }
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

let AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);
export {AdminContainer};
