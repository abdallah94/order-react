/**
 * Created by Fujitsu on 11/19/2017.
 */

import {Rating} from "./Rating";
import {connect} from "react-redux";
import i18next from "i18next";

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
        submitRating:()=>{

        },
        checkSubmitted:()=>{

        }
    }
};

let RatingContainer = connect(mapStateToProps, mapDispatchToProps)(Rating);
export {RatingContainer};

