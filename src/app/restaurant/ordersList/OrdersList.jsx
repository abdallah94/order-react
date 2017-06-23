/**
 * Created by Abdallah on 6/20/2017.
 */

/*CSS*/
import './style.css'

/* Components */

/*Modules*/
import React from 'react';
import {Row} from 'react-bootstrap';
import i18next from 'i18next';

export class OrdersList extends React.Component {
    render() {
        return (
            <div>
                {this.props.orders.map((order) => (
                    <Row className="notification-order-container">
                        <h5>{i18next.t("ORDER")} {order.orderID}</h5>
                        <p>name:{order.name}</p>
                        <p>Location:{order.location}</p>
                        <p>phone number:{order.phoneNumber}</p>
                        {order.items.map((item) => (
                            <p> {item.itemName}: {item.number}</p>
                        ))}
                    </Row>
                ))}
            </div>

        )

    }

}