import React, {Component} from "react";
import {browserHistory} from 'react-router';
import i18next from 'i18next';

import "./App.css";
import {DashboardContainer} from "./shared";
import {PathConstants, Constants, loadCookie} from '../utils';
import {loginAction} from './login';

class App extends Component {

    constructor(props) {
        super(props);
        this.checkLogin = this.checkLogin.bind(this);
    }

    componentWillMount() {
        if (!this.checkLogin() && this.props.location.pathname === "/") {
            browserHistory.push(PathConstants.PATH_APP_CUSTOMER);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname === "/") {//root path, redirect user according to their permissions
            if (!nextProps.loggedIn) {//user is not logged in
                browserHistory.push(PathConstants.PATH_APP_CUSTOMER);
            }
            else {
                if (nextProps.role === Constants.ADMIN) {
                    browserHistory.push(PathConstants.PATH_APP_ADMIN);
                }
                else {
                    if (nextProps.role === Constants.RESTAURANT) {
                        browserHistory.push(PathConstants.PATH_APP_RESTAURANT);
                    }
                    else {
                        if (nextProps.role === Constants.DELIVERY) {
                            browserHistory.push(PathConstants.PATH_APP_DELIVERY);
                        }
                    }
                }
            }
        }
    }

    checkLogin() {
        let loginCookies = loadCookie(Constants.LOGIN_COOKIE);
        if (loginCookies) {
            this.props.loadUserInfo(loginCookies);
            return true;
        }
        return false;
    }

    render() {
        return (
            <div key={i18next.language}>
                {this.props.children}
            </div>
        );
    }
}

export default App;
