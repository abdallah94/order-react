/**
 * Created by Abdallah on 6/17/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {CartContainer} from '../';
import {OrderConfirm} from '../';
import {PathConstants, Constants} from '../../../utils';
import {validate} from '../../../utils';

/*Modules*/
import React from 'react';
import {Col, Row, Form, FormGroup, FormControl, ControlLabel, Button, Radio, HelpBlock} from 'react-bootstrap';
import i18next from 'i18next';
import {browserHistory} from 'react-router';
import alertify from 'alertify.js';
import ReCAPTCHA from 'react-google-recaptcha';

export class Checkout extends React.Component {

    constructor(props) {
        super(props);
        let area="",areaIndex=0,areaValid=false;
        if (props.area) {
            area=this.props.options[props.area].label;
            areaIndex=props.area;
            areaValid=true;
        }
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            area: area,
            areaIndex: areaIndex,
            street: "",
            building: "",
            apartment: "",
            floor: "",
            show: false,
            delivery: true,
            nameValid: false,
            phoneValid: false,
            emailValid: true,
            apartmentValid: true,
            floorValid: false,
            streetValid: true,
            areaValid: areaValid,
            buildingValid: false,
            customerVerified: true,
        };
        this.submitOrder = this.submitOrder.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.getItems = this.getItems.bind(this);
        this.setDelivery = this.setDelivery.bind(this);
        this.setCheckout = this.setCheckout.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
        this.setValidationState = this.setValidationState.bind(this);
        this.customerVerified = this.customerVerified.bind(this);
    }

    setValidationState(type, value) {
        let validationField = `${type}Valid`;
        let validationState = validate(type, value);
        if (value === "") {
            if (type === 'email' || type === 'apartment' || type === 'street') {
                this.setState({[validationField]: true});
                return validationState;
            }
        }
        this.setState({[validationField]: validationState});
        return validationState;
    }

    getValidationState(type, value) {
        return validate(type, value);
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
        if (nextProps.orderSubmitted) {
            this.open();
        }
        if (nextProps.area) {
            this.setValidationState('area', nextProps.area);
            this.setState({area: this.props.options[nextProps.area].label, areaIndex: nextProps.area});
        }
    }

    customerVerified(value) {
        if (value) {
            this.setState({customerVerified: true});
        }
    }

    submitOrder() {
        if (!this.state.customerVerified) {
            alertify.logPosition('top right');
            alertify.error(i18next.t("USER_INVALID_MESSAGE"));
            return;
        }

        if (!this.state.phoneValid || !this.state.nameValid || !this.state.emailValid || !this.state.apartmentValid
            || !this.state.floorValid || !this.state.streetValid || !this.state.areaValid || !this.state.buildingValid) {
            alertify.logPosition('top right');
            alertify.error(i18next.t("INVALID_DATA_MESSAGE"));
            return;
        }
        let location = this.getLocation();
        let items = this.getItems();
        if (!items || !items.length) {
            alertify.logPosition('top right');
            alertify.error(i18next.t("EMPTY_CART_MESSAGE"));
            return;
        }
        let data = {
            "first_name": this.state.firstName,
            "last_name": this.state.lastName,
            "phone": this.state.phone,
            "location": location,
            "total": this.props.sum,
            "restaurant_id": this.props.restaurantID,
            "delivery": this.state.delivery,
            "remarks": this.state.remarks,
            items: items
        };
        if (this.state.email) {
            data.email = this.state.email;
        }
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
            let itemObj = {item_id: item.id, number: item.number};
            if (item.size) {
                itemObj.size = item.size.name;
            }
            else {
                itemObj.size = "";
            }
            if (item.extras && typeof item.extras === 'string') {
                itemObj.extras = item.extras;
            }
            else {
                itemObj.extras = "";
            }
            items.push(itemObj);
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
                <OrderConfirm show={this.state.show} resetCart={this.props.resetCart} close={this.close}
                              restaurantName={this.props.restaurantName}
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
                            <FormGroup controlId="firstNameGroup"
                                       validationState={this.getValidationState('name', this.state.firstName)}>
                                <FormControl onChange={(e) => {
                                    this.setState({firstName: e.target.value});
                                    this.setValidationState('name', e.target.value)
                                }} placeholder={i18next.t("FIRST_NAME")} type="text" value={this.state.firstName}/>
                                <FormControl.Feedback />
                                <HelpBlock>{i18next.t("REQUIRED")}</HelpBlock>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12} smOffset={2}>
                            <FormGroup controlId="lastNameGroup"
                                       validationState={this.getValidationState('name', this.state.lastName)}>
                                <FormControl onChange={(e) => {
                                    this.setState({lastName: e.target.value});
                                    this.setValidationState('lastName', e.target.value)
                                }} placeholder={i18next.t("LAST_NAME")} type="text" value={this.state.lastName}/>
                                <FormControl.Feedback />
                                <HelpBlock>{i18next.t("REQUIRED")}</HelpBlock>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12}>
                            <FormGroup controlId="phoneGroup"
                                       validationState={this.getValidationState('phone', this.state.phone)}>
                                <FormControl onChange={(e) => {
                                    console.log("####");
                                    this.setState({phone: e.target.value});
                                    this.setValidationState('phone', e.target.value)
                                }} placeholder={i18next.t("PHONE_NUMBER")} type="tel" value={this.state.phone}/>
                                <FormControl.Feedback />
                                <HelpBlock>{i18next.t("REQUIRED")}</HelpBlock>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12} smOffset={2}>
                            <FormGroup controlId="emailGroup"
                                       validationState={this.getValidationState('email', this.state.email)}>
                                <FormControl onChange={(e) => {
                                    this.setState({email: e.target.value});
                                    this.setValidationState('email', e.target.value)
                                }} placeholder={i18next.t("EMAIL")} type="email" value={this.state.email}/>
                                <FormControl.Feedback />
                                <HelpBlock>.</HelpBlock>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12}>
                            <FormGroup controlId="areaGroup"
                                       validationState={this.getValidationState('area', this.state.area)}>
                                <FormControl onChange={(e) => {
                                    this.props.chooseArea(e.target.value);
                                }} componentClass="select" value={this.state.areaIndex}>
                                    {this.props.options && this.props.options.map((option,i) => (
                                        <option value={option.value} key={i}>{option.label}</option>
                                    ))
                                    }
                                </FormControl>
                                <FormControl.Feedback />
                                <HelpBlock>{i18next.t("REQUIRED")}</HelpBlock>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12} smOffset={2}>
                            <FormGroup controlId="streetGroup"
                                       validationState={this.getValidationState('street', this.state.street)}>
                                <FormControl onChange={(e) => {
                                    this.setState({street: e.target.value});
                                    this.setValidationState('street', e.target.value)
                                }} placeholder={i18next.t("STREET")} type="text" value={this.state.street}/>
                                <FormControl.Feedback />
                                <HelpBlock>.</HelpBlock>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12}>
                            <FormGroup controlId="buildingGroup"
                                       validationState={ this.getValidationState('building', this.state.building)}>
                                <FormControl onChange={(e) => {
                                    this.setState({building: e.target.value});
                                    this.setValidationState('building', e.target.value)
                                }} placeholder={i18next.t("BUILDING")} type="text" value={this.state.building}/>
                                <FormControl.Feedback />
                                <HelpBlock>{i18next.t("REQUIRED")}</HelpBlock>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12} smOffset={2}>
                            <FormGroup controlId="floorGroup"
                                       validationState={this.getValidationState('floor', this.state.floor)}>
                                <FormControl onChange={(e) => {
                                    this.setState({floor: e.target.value});
                                    this.setValidationState('floor', e.target.value)
                                }} placeholder={i18next.t("FLOOR")} type="number" value={this.state.floor}/>
                                <FormControl.Feedback />
                                <HelpBlock>{i18next.t("REQUIRED")}</HelpBlock>
                            </FormGroup>
                        </Col>
                        <Col sm={5} xs={12}>
                            <FormGroup controlId="apartmentGroup"
                                       validationState={this.getValidationState('apartment', this.state.apartment)}>
                                <FormControl onChange={(e) => {
                                    this.setState({apartment: e.target.value});
                                    this.setValidationState('apartment', e.target.value)
                                }} placeholder={i18next.t("APARTMENT")} type="number" value={this.state.apartment}/>
                                <FormControl.Feedback />
                                <HelpBlock>.</HelpBlock>
                            </FormGroup>
                        </Col>
                        <Col smOffset={2} sm={8} xs={12}>
                            <FormGroup controlId="ramerksGroup"
                                       validationState={"success"}>
                                <FormControl componentClass="textarea" onChange={(e) => {
                                    this.setState({remarks: e.target.value});
                                }} placeholder={i18next.t("REMARKS")} type="text" value={this.state.remarks}/>
                            </FormGroup>
                        </Col>
                        <Col smOffset={2} sm={8} xs={12}>
                            <FormGroup>
                                <Col xs={6}>
                                    <Radio className="text-align-center" name="order" defaultChecked
                                           onChange={this.setDelivery}>
                                        {i18next.t("Delivery")}
                                    </Radio>
                                </Col>
                                <Col xs={6}>
                                    <Radio className="text-align-center" name="order" onChange={this.setCheckout}>
                                        {i18next.t("PICK_UP")}
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
                {!this.state.customerVerified &&
                <Row className="recapcha-container">
                    <Col xs={12}>
                        <div className="center-block recapcha">
                            <ReCAPTCHA
                                sitekey={Constants.RECAPTCHA_SITE_KEY}
                                onChange={this.customerVerified}
                            />
                        </div>
                    </Col>
                </Row>
                }
                {this.state.customerVerified &&
                <Row className="order-button-container">
                    <Col xs={12}>
                        <Button className="center-block submit-button"
                                onClick={this.submitOrder}>{i18next.t("SUBMIT_ORDER")}</Button>
                    </Col>
                </Row>
                }
            </Row>
        )

    }

}