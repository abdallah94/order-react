/**
 * Created by Abdallah on 4/23/2017.
 */
import {browserHistory, Route, Router} from "react-router";
import AppContainer from "./AppContainer";
import React from "react";

let Routing = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
            </Route>
        </Router>
    );
};

export default Routing;