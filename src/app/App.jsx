import React, {Component} from "react";
import {browserHistory} from 'react-router';

import "./App.css";
import {DashboardContainer} from "./shared";
import {PathConstants, Constants} from '../utils';

class App extends Component {

    componentWillMount() {
        if (!this.props.loggedIn) {//user is not logged in
            browserHistory.push(PathConstants.PATH_APP_CUSTOMER);
        }
        else {
            if (this.props.role === Constants.ADMIN) {
                browserHistory.push(PathConstants.PATH_APP_ADMIN);
            }
            else {
                if (this.props.role === Constants.RESTAURANT) {
                    browserHistory.push(PathConstants.PATH_APP_RESTAURANT);
                }
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("YYYY");
        console.log(nextProps);
        if (this.props.loggedIn && !nextProps.loggedIn) {//user logged out
            browserHistory.push(PathConstants.PATH_APP_CUSTOMER);
        }
        else {
            if (this.props.loggedIn && this.props.role !== nextProps.role)
                if (nextProps.role === Constants.ADMIN) {
                    browserHistory.push(PathConstants.PATH_APP_ADMIN);
                }
                else {
                    if (nextProps.role === Constants.RESTAURANT) {
                        browserHistory.push(PathConstants.PATH_APP_RESTAURANT);
                    }
                }
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App;
