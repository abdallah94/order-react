/**
 * Created by Abdallah on 6/3/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {Image, Row, Col, Button} from 'react-bootstrap';
/*Modules*/
import React from 'react';
import i18next from 'i18next';

export class Order extends React.Component {
    constructor(props) {
        super(props);
        this.addOrder = this.addOrder.bind(this);
    }

    addOrder() {
        this.props.addOrder(this.props.id, 1, this.props.name, this.props.price, this.props.restaurantID,
            this.props.minOrder, this.props.deliveryTime, this.props.deliveryFee, this.props.restaurantName);
    }

    render() {
        return (
            <Row className="order-container">
                <Col md={3} xs={12}>
                    <Image src={this.props.imageUrl} className="order-image"/>
                </Col>
                <Col md={5} xs={12}>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.description}</p>
                </Col>
                <Col mdOffset={0} md={2} xsOffset={2} xs={4}>
                    <h5 className="text-align-center center-block order-price">{this.props.price} $</h5>
                </Col>
                {!this.props.edit &&
                <Col mdOffset={0} md={2} xsOffset={3} xs={3}>
                    <h3 className="text-center" onClick={this.addOrder}><i className="fa fa-plus-square add-symbol"
                                                                           aria-hidden="true"></i>
                    </h3>
                </Col>}
                {this.props.edit &&
                <Col mdOffset={0} md={2} xsOffset={3} xs={3}>
                    <Button className="order-button-edit text-center">{i18next.t("EDIT")}</Button>
                </Col>
                }
            </Row>

        )

    }

}