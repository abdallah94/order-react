/**
 * Created by Fujitsu on 11/19/2017.
 */

import {OrderRating} from "./Rating";
import {connect} from "react-redux";
import i18next from "i18next";
import {checkRatingSubmitted, submitRating} from "../../customer/actions";

let mapStateToProps = (state, ownProps) => {
    return {
        orderID: ownProps.params.id,
        submitted: state.rating.submitted
    }
};

let mapDispatchToProps = (dispatch, ownState) => {
    return {
        submitRating: (data, successCallback) => {
            dispatch(submitRating(data, successCallback))
        },
        checkSubmitted: (orderID) => {
            dispatch(checkRatingSubmitted(orderID));
        }
    }
};

let RatingContainer = connect(mapStateToProps, mapDispatchToProps)(OrderRating);
export {RatingContainer};

