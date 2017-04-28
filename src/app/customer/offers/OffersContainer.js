/**
 * Created by Abdallah on 4/28/2017.
 */

/* Components */
import {Offers} from "./Offers";
import {Constants} from '../../../utils';
/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {//TODO: Add offers from API
        offers: getDummyOffers(),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

//TODO: Delete dummy data
function getDummyOffers() {
    return [{
        image: Constants.OFFER_1,
        restaurant: "KFC",
        description: "Buy two get one free"
    }, {image: Constants.OFFER_2, restaurant: "Buffalo", description: "free meal"}, {
        image: Constants.OFFER_3,
        restaurant: "KFC",
        description: "15$ lunch!"
    }, {image: Constants.OFFER_4, restaurant: "Mr.Pizza", description: "Large Pizza for 10$"},];
}

let OffersContainer = connect(mapStateToProps, mapDispatchToProps)(Offers);
export {OffersContainer};