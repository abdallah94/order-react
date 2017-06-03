/**
 * Created by Abdallah on 4/25/2017.
 */
const RouteConstants = {
    ROUTE_LOGIN: "login",
    ROUTE_APP_CUSTOMER: "customer",
    ROUTE_APP_ADMIN: "admin",
    ROUTE_APP_RESTAURANT: "restaurant",
    ROUTE_APP_CUSTOMER_RESTAURANTS: "restaurants",
    ROUTE_APP_CUSTOMER_RESTAURANTS_FULL: "restaurants(?name=:name)"
};

const PathConstants = {
    PATH_LOGIN: "/" + RouteConstants.ROUTE_LOGIN,
    PATH_APP_CUSTOMER: "/" + RouteConstants.ROUTE_APP_CUSTOMER,
    PATH_APP_ADMIN: "/" + RouteConstants.ROUTE_APP_ADMIN,
    PATH_APP_RESTAURANT: "/" + RouteConstants.ROUTE_APP_RESTAURANT,
    PATH_APP_CUSTOMER_RESTAURANTS: "/" + RouteConstants.ROUTE_APP_CUSTOMER + "/" + RouteConstants.ROUTE_APP_CUSTOMER_RESTAURANTS,
};


export {RouteConstants, PathConstants};