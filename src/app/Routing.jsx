/**
 * Created by Abdallah on 4/23/2017.
 */
import {browserHistory, Route, Router, IndexRoute, IndexRedirect} from "react-router";
import React from "react";
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
let Routing = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
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
                <Route path={RouteConstants.ROUTE_APP_ADMIN} component={AdminContainer}>
                    <IndexRedirect to={RouteConstants.ROUTE_APP_ADMIN_HOME}/>
                    <Route path={RouteConstants.ROUTE_APP_ADMIN_HOME} component={AdminMainComponent}/>
                    <Route path={RouteConstants.ROUTE_APP_ADMIN_RESTAURANTS} component={AdminRestaurantsComponent}/>
                </Route>
                <Route path={RouteConstants.ROUTE_APP_RESTAURANT} component={RestaurantContainer}>
                    <IndexRoute component={RestaurantMainComponentContainer}/>
                    <Route path=":id" component={RestaurantMainComponentContainer}/>
                </Route>
                <Route path={`${RouteConstants.ROUTE_APP_ORDER}`}>
                    <Route path=":id" component={OrderDetailsContainer}/>
                </Route>
                <Route path={RouteConstants.ROUTE_APP_ORDERS}>
                    <Route path=":id" component={OrdersContainer}/>
                </Route>
                <Route/>
            </Route>
        </Router>
    );
    };

    export default Routing;