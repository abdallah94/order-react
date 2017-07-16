/**
 * Created by Abdallah on 6/20/2017.
 */

/*CSS*/
import './style.css'

/* Components */

/*Modules*/
import React from 'react';
import {Row, Button} from 'react-bootstrap';
import i18next from 'i18next';

export class OrdersList extends React.Component {
    constructor(props) {
        super(props);
        this.navigateToOrder = this.navigateToOrder.bind(this);
    }

    componentWillMount() {
        this.props.getOrders(this.props.restaurantID);
    }

    navigateToOrder() {

    }

    render() {
        console.log(this.props.orders);
        return (
            <div>
                {this.props.orders && Object.keys(this.props.orders).length !== 0 && this.props.orders.map((order) => (
                    <Row className="notification-order-container">
                        <h5>{i18next.t("ORDER")} {order.id}</h5>
                        <p>{i18next.t("PHONE_NUMBER")}:{order.first_name} {order.last_name}</p>
                        <p>{i18next.t("LOCATION")}:{order.location}</p>
                        <p>{i18next.t("PHONE_NUMBER")}:{order.phone}</p>
                        <p>{i18next.t("TOTAL")}: {order.total}</p>
                        <Button onClick={this.navigateToOrder}>{i18next.t("SHOW_ORDER")}</Button>
                    </Row>
                ))}
            </div>

        )

    }

}