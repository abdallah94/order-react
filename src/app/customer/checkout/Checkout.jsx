/**
 * Created by Abdallah on 6/17/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {CartContainer} from '../';
import {OrderConfirm} from '../';
import {PathConstants} from '../../../utils';

/*Modules*/
import React from 'react';
import {Col, Row, Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import i18next from 'i18next';
import {browserHistory} from 'react-router';

export class Checkout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            area: "",
            street: "",
            building: "",
            apartment: "",
            floor: "",
            show: false,
        };
        this.submitOrder = this.submitOrder.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    submitOrder() {
        //TODO:add submit API and clear store
        this.open();
    }

    close() {
        this.setState({show: false});
    }

    open() {
        this.setState({show: true});
    }

    render() {
        return (
            <Row className="body-container">
                <OrderConfirm show={this.state.show} close={this.close} restaurantName={this.props.restaurantName}
                              deliveryTime={this.props.deliveryTime}/>
                <Row className="checkout-cart-container">
                    <h4 className="text-align-center">{i18next.t("ORDER")}</h4>
                    <Col xs={12} className="no-padding">
                        <CartContainer/>
                    </Col>
                </Row>
                <Row className="address-form-container">
                    <h4 className="customer-details">{i18next.t("CUSTOMER_DETAILS")}</h4>
                    <Form horizontal className="address-form">
                        <Col sm={5} xs={12}>
                            <FormGroup controlId="firstNameGroup">
                                <FormControl onChange={(e) => {
                                    this.setState({firstName: e.target.value})
                                }} placeholder={i18next.t("FIRST_NAME")} type="text" value={this.state.firstName}/>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12} smOffset={2}>
                            <FormGroup controlId="lastNameGroup">
                                <FormControl onChange={(e) => {
                                    this.setState({lastName: e.target.value})
                                }} placeholder={i18next.t("LAST_NAME")} type="text" value={this.state.lastName}/>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12}>
                            <FormGroup controlId="phoneGroup">
                                <FormControl onChange={(e) => {
                                    this.setState({phone: e.target.value})
                                }} placeholder={i18next.t("PHONE_NUMBER")} type="tel" value={this.state.phone}/>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12} smOffset={2}>
                            <FormGroup controlId="emailGroup">
                                <FormControl onChange={(e) => {
                                    this.setState({email: e.target.value})
                                }} placeholder={i18next.t("EMAIL")} type="email" value={this.state.email}/>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12}>
                            <FormGroup controlId="areaGroup">
                                <FormControl onChange={(e) => {
                                    this.setState({area: e.target.value})
                                }} placeholder={i18next.t("AREA")} type="text" value={this.state.area}/>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12} smOffset={2}>
                            <FormGroup controlId="streetGroup">
                                <FormControl onChange={(e) => {
                                    this.setState({street: e.target.value})
                                }} placeholder={i18next.t("STREET")} type="text" value={this.state.street}/>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12}>
                            <FormGroup controlId="buildingGroup">
                                <FormControl onChange={(e) => {
                                    this.setState({building: e.target.value})
                                }} placeholder={i18next.t("BUILDING")} type="text" value={this.state.building}/>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12} smOffset={2}>
                            <FormGroup controlId="floorGroup">
                                <FormControl onChange={(e) => {
                                    this.setState({floor: e.target.value})
                                }} placeholder={i18next.t("FLOOR")} type="text" value={this.state.floor}/>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12}>
                            <FormGroup controlId="apartmentGroup">
                                <FormControl onChange={(e) => {
                                    this.setState({apartment: e.target.value})
                                }} placeholder={i18next.t("APARTMENT")} type="text" value={this.state.apartment}/>
                            </FormGroup>
                        </Col>
                        <FormGroup>
                            <Col mdOffset={4} md={4} lgOffset={4} lg={4} smOffset={4} sm={4} xsOffset={3}
                                 xs={6}>

                            </Col>
                        </FormGroup>
                    </Form>
                </Row>
                <Row className="order-button-container">
                    <Col xs={12}>
                        <Button className="center-block submit-button"
                                onClick={this.submitOrder}>{i18next.t("SUBMIT_ORDER")}</Button>
                    </Col>
                </Row>
            </Row>
        )

    }

}