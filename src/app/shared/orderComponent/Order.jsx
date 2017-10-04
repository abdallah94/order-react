import "./style.css";
/* Components */
import {Constants} from '../../../utils';
/*Modules*/
import React from "react";
import i18next from "i18next";
import {Image, Row, Col, Button} from "react-bootstrap";


export class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.addOrder = this.addOrder.bind(this);
        this.editOrder = this.editOrder.bind(this);
    }

    addOrder() {
        this.props.addOrder(this.props.id, 1, this.props.name, this.props.price, this.props.restaurantID,
            this.props.minOrder, this.props.deliveryTime, this.props.deliveryFee, this.props.restaurantName);
    }

    editOrder() {
        this.props.editOrder(this.props.id, this.props.name, this.props.description, this.props.price,this.props.imageUrl);

    }

    render() {
        return (
            <Row className="order-container">
                <Col md={3} xs={12}>
                    <Image src={this.props.imageUrl ? this.props.imageUrl : Constants.OFFER_3} className="order-image"/>
                </Col>
                <div>
                    <Col md={5} xs={12}>
                        <h2>{this.props.name}</h2>
                        <p>{this.props.description}</p>
                    </Col>
                    <Col mdOffset={0} md={2} xsOffset={2} xs={4}>
                        <h5 className="text-align-center center-block order-price">{this.props.price} $</h5>
                    </Col>
                </div>
                {!this.props.edit &&
                <Col mdOffset={0} md={2} xsOffset={3} xs={3}>
                    <h3 className="text-center" onClick={this.addOrder}><i className="fa fa-plus-square add-symbol"
                                                                           aria-hidden="true"/>
                    </h3>
                </Col>}
                {this.props.edit &&
                <Col mdOffset={0} md={2} xsOffset={3} xs={3}>
                    <Button className="order-button-edit text-center"
                            onClick={this.editOrder}>{i18next.t("EDIT")}</Button>
                </Col >
                }
            </Row>
        )
    }
}