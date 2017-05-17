/**
 * Created by Fujitsu on 5/18/2017.
 */
/* Components */
import {MenuItem} from "./MenuItem";
import {Constants} from '../../../utils';
/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.id,
        name: ownProps.name,
        description: ownProps.description,
        imageUrl: ownProps.imageUrl,
        price: ownProps.price
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (id, num) => {

        }
    }
};

let MenuItemContainer = connect(mapStateToProps, mapDispatchToProps)(MenuItem);
MenuItemContainer.defaultProps = {
    id: -1,
    imageUrl: Constants.FOOD_IMG,
    name: "Delicious meal",
    description: "This is a long description of the meal mentioned above, enjoy!",
    price: "10"
};
export {MenuItemContainer};