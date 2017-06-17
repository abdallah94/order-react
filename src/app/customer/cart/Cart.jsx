/**
 * Created by Abdallah on 6/7/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {Constants, PathConstants} from '../../../utils';
import {CartElement} from '../';
/*Modules*/
import React from 'react';
import {Col, Image, Row, Button} from 'react-bootstrap';
import i18next from 'i18next';
import {browserHistory} from 'react-router';

export class Cart extends React.Component {

    navigateToCheckout() {
        browserHistory.push(PathConstants.PATH_APP_CUSTOMER_CHECKOUT);
    }

    render() {
        const totalOffset = (this.props.checkout) ? 4 : 0;
        const totalWidth = (this.props.checkout) ? 2 : 6;
        return (
            <div className="padding-bottom-2rem white-background">
                {!this.props.checkout &&
                <Row className="cart-component-cart-symbol-container">
                    <Col xs={6} xsOffset={3}>
                        <Image src={Constants.CART_IMG} className="cart-component-cart-symbol center-block"/>
                    </Col>
                </Row>
                }
                <Col xs={12} className="no-padding">
                    <h2 className="center-block text-align-center cart-rest-name">{this.props.restaurantName}
                    </h2>
                </Col>
                <br/>
                <br/>
                {this.props.items && this.props.items.map((item) => (
                    <CartElement key={item.id} editItemNumber={this.props.editItemNumber} {...item}
                                 checkout={this.props.checkout}/>
                ))}
                <br/>
                <br/>
                <Row>
                    <Col xs={12}>
                        <Col xs={totalWidth} xsOffset={totalOffset}>
                            <h5 className="text-align-left">{i18next.t("DELIVERY_TIME")}:</h5>
                        </Col>
                        <Col xs={totalWidth}>
                            <h5 className="text-align-right">{this.props.deliveryTime}</h5>
                        </Col>
                        <Col xs={totalWidth} xsOffset={totalOffset}>
                            <h5 className="cart-sum text-align-left">{i18next.t("SUM")}:</h5>
                        </Col>
                        <Col xs={totalWidth}>
                            <h5 className="text-align-right">{this.props.sum}</h5>
                        </Col>
                        <Col xs={totalWidth} xsOffset={totalOffset}>
                            <h5 className="text-align-left">{i18next.t("DELIVERY")}:</h5>
                        </Col>
                        <Col xs={totalWidth}>
                            <h5 className="text-align-right">{this.props.deliveryFee}</h5>
                        </Col>
                        <Col xs={totalWidth} xsOffset={totalOffset}>
                            <h5 className="text-align-left">{i18next.t("TOTAL")}:</h5>
                        </Col>
                        <Col xs={totalWidth}>
                            <h5 className="text-align-right">{this.props.total}</h5>
                        </Col>
                    </Col>
                </Row>
                {!this.props.checkout &&
                <Row>
                    <Col xs={8} xsOffset={2}>
                        <Button className="center-block checkout-button"
                                onClick={this.navigateToCheckout.bind(this)}>{i18next.t("CHECKOUT")}</Button>
                    </Col>
                </Row>
                }
            </div>
        )
    }

}