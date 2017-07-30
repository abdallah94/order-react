/**
 * Created by Abdallah on 6/20/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {OrdersListContainer} from '../';
import {PathConstants} from '../../../utils';

/*Modules*/
import React from 'react';
import ScrollArea from "react-scrollbar";
import {Button, Col} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import i18next from 'i18next';

export class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.navigateToOrders = this.navigateToOrders.bind(this);
    }

    navigateToOrders() {
        browserHistory.push(PathConstants.PATH_APP_ORDERS + "/" + this.props.restaurantID);
    }

    render() {
        return (
            <div>
                <ScrollArea stopScrollPropagation className="notifications-slider orders-notifications-container"
                            vertical={true}
                            horizontal={false} smoothScrolling={true}>
                    <OrdersListContainer restaurantID={this.props.restaurantID}/>
                </ScrollArea>
                <Col xs={12}>
                    <Button onClick={this.navigateToOrders}
                            className="text-align-center center-block show-all-button btn-primary">{i18next.t("SHOW_ALL ")}</Button>
                </Col>
            </div>
        )
    }
}