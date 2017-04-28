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
    return [{image: Constants.OFFER_1}, {image: Constants.OFFER_2}, {image: Constants.OFFER_3}, {image: Constants.OFFER_4},];
}

let OffersContainer = connect(mapStateToProps, mapDispatchToProps)(Offers);
export {OffersContainer};