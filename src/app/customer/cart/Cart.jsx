/**
 * Created by Abdallah on 6/7/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {Constants} from '../../../utils';
import {CartElement} from '../';
/*Modules*/
import React from 'react';
import {Col, Image, Row} from 'react-bootstrap';
import i18next from 'i18next';

export class Cart extends React.Component {
    render() {
        return (
            <div>
                <Row className="cart-component-cart-symbol-container">
                    <Col xs={6} xsOffset={3}>
                        <Image src={Constants.CART_IMG} className="cart-component-cart-symbol center-block"/>
                    </Col>
                </Row>
                <Col xs={12}>
                    <h2 className="center-block cart-rest-name">{this.props.restaurantName}</h2>
                </Col>
                {this.props.items && this.props.items.map((item) => (
                    <CartElement editItemNumber={this.props.editItemNumber} {...item}/>
                ))}
                <Row>
                    <Col xs={12}>
                        <Col xs={6}>
                        <h5 className="cart-sum text-align-left">{i18next.t("SUM")}:</h5>
                        </Col>
                        <Col xs={6}>
                            <h5 className="text-align-right">{this.props.sum}</h5>
                        </Col>
                        <Col xs={6}>
                            <h5 className="text-align-left">{i18next.t("DELIVERY")}:</h5>
                        </Col>
                        <Col xs={6}>
                            <h5 className="text-align-right">{this.props.delivery}</h5>
                        </Col>
                        <Col xs={6}>
                            <h5 className="text-align-left">{i18next.t("TOTAL")}:</h5>
                        </Col>
                        <Col xs={6}>
                            <h5 className="text-align-right">{this.props.total}</h5>
                        </Col>
                    </Col>
                </Row>
            </div>
        )
    }

}