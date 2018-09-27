import React from 'react';
import { Route } from 'react-router';
import {browserHistory, Router, IndexRoute, IndexRedirect} from "react-router";
import {RouteConstants} from "../utils";
import AppContainer from "./AppContainer";
import {CustomerContainer, CustomerMainComponent, RestaurantsListContainer, CheckoutContainer} from "./customer";
import {MenuContainer} from "./customer";
import {LoginContainer} from './login';
import {AdminContainer} from './admin';
import {RestaurantContainer} from './restaurant';
import {RestaurantMainComponentContainer} from './restaurant';
import {OrderDetailsContainer, OrdersContainer} from './restaurant';
import {AdminMainComponent} from './admin/adminMainComponent/AdminMainComponent'
import {AdminRestaurantsComponent} from './admin/adminRestaurants/AdminRestaurantsComponent'

export default (
    <Route path="/">
        <Route path={RouteConstants.ROUTE_APP_CUSTOMER} >
            <IndexRoute />
            <Route path={RouteConstants.ROUTE_APP_CUSTOMER_RESTAURANTS}>
                <IndexRoute />
                <Route path=":id" />
            </Route>
            <Route path={RouteConstants.ROUTE_APP_CUSTOMER_CHECKOUT}
                   checkout={true}/>
        </Route>
        <Route path={RouteConstants.ROUTE_APP_LOGIN} />
        <Route path={RouteConstants.ROUTE_APP_ADMIN} >
            <IndexRedirect to={RouteConstants.ROUTE_APP_ADMIN_HOME}/>
            <Route path={RouteConstants.ROUTE_APP_ADMIN_HOME} />
            <Route path={RouteConstants.ROUTE_APP_ADMIN_RESTAURANTS} />
        </Route>
        <Route path={RouteConstants.ROUTE_APP_RESTAURANT} >
            <IndexRoute />
            <Route path=":id" />
        </Route>
        <Route path={`${RouteConstants.ROUTE_APP_ORDER}`}>
            <Route path=":id" />
        </Route>
        <Route path={RouteConstants.ROUTE_APP_ORDERS}>
            <Route path=":id" />
        </Route>
        <Route/>
    </Route>
);