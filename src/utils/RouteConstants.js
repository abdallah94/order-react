/**
 * Created by Abdallah on 4/25/2017.
 */
const RouteConstants = {
    ROUTE_LOGIN: "login",
    ROUTE_APP_CUSTOMER: "customer",
    ROUTE_APP_ADMIN: "admin",
    ROUTE_APP_RESTAURANT: "restaurant",
    ROUTE_APP_CUSTOMER_RESTAURANTS: "restaurants",
    ROUTE_APP_CUSTOMER_RESTAURANTS_FULL: "restaurants(?name=:name)",
    ROUTE_APP_CUSTOMER_CHECKOUT: "checkout",
    ROUTE_APP_LOGIN: "login",
    ROUTE_APP_ORDER: "order",
    ROUTE_APP_ORDERS: "orders",
    ROUTE_APP_ADMIN_HOME: "home",
    ROUTE_APP_ADMIN_RESTAURANTS: "restaurants",
    ROUTE_APP_DELIVERY: "delivery"
};

const PathConstants = {
    PATH_LOGIN: "/" + RouteConstants.ROUTE_LOGIN,
    PATH_APP_CUSTOMER: "/" + RouteConstants.ROUTE_APP_CUSTOMER,
    PATH_APP_ADMIN: "/" + RouteConstants.ROUTE_APP_ADMIN,
    PATH_APP_RESTAURANT: "/" + RouteConstants.ROUTE_APP_RESTAURANT,
    PATH_APP_DELIVERY: "/" + RouteConstants.ROUTE_APP_DELIVERY,
    PATH_APP_CUSTOMER_RESTAURANTS: "/" + RouteConstants.ROUTE_APP_CUSTOMER + "/" + RouteConstants.ROUTE_APP_CUSTOMER_RESTAURANTS,
    PATH_APP_CUSTOMER_CHECKOUT: "/" + RouteConstants.ROUTE_APP_CUSTOMER + "/" + RouteConstants.ROUTE_APP_CUSTOMER_CHECKOUT,
    PATH_APP_ORDER: "/" + RouteConstants.ROUTE_APP_ORDER,
    PATH_APP_ORDERS: "/" + RouteConstants.ROUTE_APP_ORDERS,
    PATH_APP_ADMIN_HOME: "/" + RouteConstants.ROUTE_APP_ADMIN + "/" + RouteConstants.ROUTE_APP_ADMIN_HOME,
    PATH_APP_ADMIN_RESTAURANTS: "/" + RouteConstants.ROUTE_APP_ADMIN + "/" + RouteConstants.ROUTE_APP_ADMIN_RESTAURANTS,
};


export {RouteConstants, PathConstants};