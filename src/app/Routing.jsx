/**
 * Created by Abdallah on 4/23/2017.
 */
import {browserHistory, Route, Router, IndexRoute} from "react-router";
import React from "react";

import {RouteConstants} from '../utils';
import AppContainer from "./AppContainer";
import {CustomerMainComponent} from './customer';

let Routing = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
                <IndexRoute component={CustomerMainComponent}/>
            </Route>
        </Router>
    );
};

export default Routing;