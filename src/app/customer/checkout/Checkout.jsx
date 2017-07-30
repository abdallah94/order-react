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
import {Col, Row, Form, FormGroup, FormControl, ControlLabel, Button, Radio} from 'react-bootstrap';
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
            delivery: true,
        };
        this.submitOrder = this.submitOrder.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.getItems = this.getItems.bind(this);
        this.setDelivery = this.setDelivery.bind(this);
        this.setCheckout = this.setCheckout.bind(this);
    }

    setDelivery() {
        this.setState({
            delivery: true,
        });
    }

    setCheckout() {
        this.setState({
            delivery: false,
        });
    }

    componentWillReceiveProps(nextProps) {
        if ((this.props.restaurantName && !nextProps.restaurantName)) {
            this.open();
        }
    }

    submitOrder() {
        //TODO:add submit API and clear store
        let location = this.getLocation();
        let items = this.getItems();
        let data = {
            "first_name": this.state.firstName,
            "last_name": this.state.lastName,
            "email": this.state.email,
            "phone": this.state.phone,
            "location": location,
            "total": this.props.sum,
            "restaurant_id": this.props.restaurantID,
            "delivery": this.state.delivery,
            items: items
        };
        this.props.submitOrder(data);
    }

    getLocation() {
        let location = "";
        if (this.state.building) {
            location += this.state.building + ",";
        }
        if (this.state.floor) {
            location += this.state.floor + ",";
        }
        if (this.state.apartment) {
            location += this.state.apartment + ",";
        }
        if (location !== "") {
            location += "\n";
        }
        if (this.state.street) {
            location += this.state.street + ",";
        }
        if (this.state.area) {
            location += this.state.area;
        }
        return location;
    }

    getItems() {
        let items = [];
        this.props.items.map((item) => {
            items.push({item_id: item.id, number: item.number});
        });
        return items;
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
                        <Col smOffset={2} sm={8} xs={12}>
                            <FormGroup>
                                <Col xs={6}>
                                    <Radio className="text-align-center" name="order" defaultChecked
                                           onChange={this.setDelivery}>
                                        Delivery
                                    </Radio>
                                </Col>
                                <Col xs={6}>
                                    <Radio className="text-align-center" name="order" onChange={this.setCheckout}>
                                        Pick up
                                    </Radio>
                                </Col>
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