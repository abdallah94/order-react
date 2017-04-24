/**
 * Created by Abdallah on 4/24/2017.
 */

/* Components */
import {CustomerMainComponent} from "./CustomerMainComponent";
import {Constants} from '../../../utils';
/* Modules */
import {connect} from "react-redux";
import i18next from "i18next";

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

let CustomerMainComponentContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerMainComponent);
export {CustomerMainComponentContainer};