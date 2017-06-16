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
                <Col xs={12}>
                    <h4 className="cart-sum">{i18next.t("SUM")}:{this.props.sum}</h4>
                    <h4 className="">{i18next.t("DELIVERY")}:{this.props.delivery}</h4>
                    <h4 className="">{i18next.t("TOTAL")}:{this.props.total}</h4>
                </Col>
            </div>
        )
    }

}