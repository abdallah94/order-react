/**
 * Created by Abdallah on 5/18/2017.
 */
/* Components */
import {Customer} from "./Customer";
/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {total: state.cart.total}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

let CustomerContainer = connect(mapStateToProps, mapDispatchToProps)(Customer);
export {CustomerContainer};