/**
 * Created by Fujitsu on 6/7/2017.
 */

/* Components */
import {Cart} from "./Cart";

/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

let CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);
export {CartContainer};
