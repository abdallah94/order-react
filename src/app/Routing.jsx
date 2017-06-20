/**
 * Created by Abdallah on 4/23/2017.
 */
import {browserHistory, Route, Router, IndexRoute, IndexRedirect} from "react-router";
import React from "react";
import {RouteConstants} from "../utils";
import AppContainer from "./AppContainer";
import {CustomerContainer, CustomerMainComponent, RestaurantsListContainer, CheckoutContainer} from "./customer";
import {MenuContainer} from "./shared";
import {LoginContainer} from './login';

let Routing = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
                <IndexRedirect to={RouteConstants.ROUTE_APP_CUSTOMER}/>
                <Route path={RouteConstants.ROUTE_APP_CUSTOMER} component={CustomerContainer}>
                    <IndexRoute component={CustomerMainComponent}/>
                    <Route path={RouteConstants.ROUTE_APP_CUSTOMER_RESTAURANTS}>
                        <IndexRoute component={RestaurantsListContainer}/>
                        <Route path=":id" component={MenuContainer}/>
                    </Route>
                    <Route path={RouteConstants.ROUTE_APP_CUSTOMER_CHECKOUT} component={CheckoutContainer}
                           checkout={true}/>
                </Route>
                <Route path={RouteConstants.ROUTE_APP_LOGIN} component={LoginContainer}/>
                <Route/>
            </Route>
        </Router>
    );
};

export default Routing;