/**
 * Created by Fujitsu on 6/20/2017.
 */

import {Notification} from './Notification';

import {connect} from 'react-redux';

let mapStateToProps = (state,ownProps) => {
    return {delivery: ownProps.delivery}
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

const NotificationContainer = connect(mapStateToProps, mapDispatchToProps)(Notification);
export {NotificationContainer};