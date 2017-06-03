/**
 * Created by Abdallah on 4/24/2017.
 */
import {RouteConstants} from '../../utils';

import {browserHistory} from 'react-router';

export function findRestaurant(name) {
    browserHistory.push(RouteConstants.ROUTE_APP_CUSTOMER_RESTAURANTS);


}
