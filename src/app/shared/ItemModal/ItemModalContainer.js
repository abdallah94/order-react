/**
 * Created by Fujitsu on 8/5/2017.
 */
import {ItemModal} from "./ItemModal";
import {connect} from "react-redux";

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
        close: () => {
            ownState.close();
        },
        addOrder: (price, extras) => {
            ownState.addOrder(ownState.size, price, extras)

        }
    }
};

let ItemModalContainer = connect(mapStateToProps, mapDispatchToProps)(ItemModal);
export {ItemModalContainer};
