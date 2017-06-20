/**
 * Created by Abdallah on 3/12/2017.
 */

import {connect} from "react-redux";
import {browserHistory} from 'react-router';

import Login from "./Login";
import {PathConstants, Constants} from '../../utils';
import {loginAction} from './';

import alertify from 'alertify.js';
import i18next from 'i18next';

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => {
            dummyCheckLogin(email, password, dispatch);
        }
    }
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

function dummyCheckLogin(email, password, dispatch) {
    if (email === "restaurant@gmail.com" && password === "res") {
        dispatch(loginAction(Constants.RESTAURANT, 1));
        browserHistory.push(PathConstants.PATH_APP_RESTAURANT);
    }
    else if (email === "admin@gmail.com" && password === "admin") {
        dispatch(loginAction(Constants.ADMIN, 1));
        browserHistory.push(PathConstants.PATH_APP_ADMIN);
    }
    else {
        alertify.logPosition('top right');
        alertify.error(i18next.t("LOGIN_WRONG_CREDENTIALS_MESSAGE"));
    }
}

export {LoginContainer};