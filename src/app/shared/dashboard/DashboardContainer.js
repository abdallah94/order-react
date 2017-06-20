/**
 * Created by Abdallah on 4/24/2017.
 */

/* Components */
import Dashboard from "./Dashboard";
import {Constants} from '../../../utils';
import {logoutAction} from '../../login';

/* Modules */
import {connect} from "react-redux";
import i18next from "i18next";

const mapStateToProps = (state) => {
    return {
        loggedIn: state.login.loggedIn,
        role: state.login.role,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: () => {
            i18next.changeLanguage(i18next.language === Constants.ENGLISH ? Constants.ARABIC : Constants.ENGLISH);
        },
        logout: () => {
            dispatch(logoutAction());
        }
    }
};

let DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export {DashboardContainer};