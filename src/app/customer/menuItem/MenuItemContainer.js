/**
 * Created by Fujitsu on 5/18/2017.
 */
/* Components */
import {MenuItem} from "./MenuItem";
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
export {MenuItemContainer};