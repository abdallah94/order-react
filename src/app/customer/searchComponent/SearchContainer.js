/**
 * Created by Abdallah on 4/24/2017.
 */

/* Components */
import {Search} from "./Search";
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

let SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export {SearchContainer};