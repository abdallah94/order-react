/**
 * Created by Abdallah on 6/20/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {PathConstants} from '../../../utils';
/*Modules*/
import React from 'react';
import {Row, Button, Col} from 'react-bootstrap';
import i18next from 'i18next';
import {browserHistory} from 'react-router';

export class OrdersList extends React.Component {
    constructor(props) {
        super(props);
        this.navigateToOrder = this.navigateToOrder.bind(this);
    }

    componentWillMount() {
        if (this.props.delivery) {
            this.props.getDeliveryOrders();
            let intervalID = setInterval(() => {
                this.props.getDeliveryOrders();
            }, 30000);
        }
        else {
            this.props.getOrders(this.props.restaurantID);
            let intervalID = setInterval(() => {
                this.props.getOrders(this.props.restaurantID);
            }, 30000);
        }
    }

    navigateToOrder(id) {
        let path = PathConstants.PATH_APP_ORDER + "/" + id;
        browserHistory.push(path);
    }

    acceptOrder(id) {

    }

    render() {
        return (
            <div>
                {this.props.orders && Object.keys(this.props.orders).length !== 0 && this.props.orders.map((order) => {
                    let orderStatus = (order.accepted) ? "btn-success" : "btn-danger";
                    if (this.props.delivery) {
                        orderStatus = (order.delivery_accepted) ? "btn-success" : "btn-danger";
                    }
                    return (
                        <Row key={order.id} className={`notification-order-container ${orderStatus}`}>
                            <h5>{i18next.t("ORDER")} {order.id}</h5>
                            <p>{i18next.t("NAME")}:{order.first_name} {order.last_name}</p>
                            <p>{i18next.t("LOCATION")}:{order.location}</p>
                            <p>{i18next.t("PHONE_NUMBER")}:{order.phone}</p>
                            <p>{i18next.t("TOTAL")}: {order.total}{" ,           "}{order.delivery ? i18next.t("DELIVERY") : i18next.t("PICK_UP")}</p>
                            <p> at: {order.created_at}</p>
                            {!this.props.delivery &&
                            <Col xs={6}>
                                <Button className="pull-left" onClick={() => {
                                    this.navigateToOrder(order.id)
                                }}>{i18next.t("SHOW_ORDER")}</Button>
                            </Col>
                            }
                            {!this.props.delivery && !order.accepted &&
                            <Col xs={6}>
                                <Button className="pull-right btn-primary" onClick={() => {
                                    this.props.acceptOrder(order.id, this.props.restaurantID)
                                }}>{i18next.t("ACCEPT_ORDER")}</Button>
                            </Col>
                            }
                            {this.props.delivery && !order.delivery_accepted &&
                            <Col xs={6}>
                                <Button className="pull-right btn-primary" onClick={() => {
                                    this.props.acceptDeliveryOrder(order.id)
                                }}>{i18next.t("ACCEPT_ORDER")}</Button>
                            </Col>
                            }
                        </Row>
                    )
                })}
            </div>

        )

    }

}