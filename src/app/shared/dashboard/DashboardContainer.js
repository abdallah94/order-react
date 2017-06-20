/**
 * Created by Abdallah on 4/24/2017.
 */

/* Components */
import Dashboard from "./Dashboard";
import {Constants} from '../../../utils';
/* Modules */
import {connect} from "react-redux";
import i18next from "i18next";

const mapStateToProps = (state, ownProps) => {
    return {role: ownProps.role};
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: () => {
            i18next.changeLanguage(i18next.language === Constants.ENGLISH ? Constants.ARABIC : Constants.ENGLISH);
        },
        showCart: () => {

        }
    }
};

let DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export {DashboardContainer};