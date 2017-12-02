/**
 * Created by Abdallah on 11/19/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {PathConstants, Constants} from '../../../utils';
import {validate} from '../../../utils';
import {DashboardContainer} from '../../shared';
import {PageFooter} from "../PageFooter/PageFooter";

/*Modules*/
import React from 'react';
import i18next from 'i18next';
import {
    Col,
    Row,
    Form,
    FormGroup,
    FormControl,
    Button,
    Radio,
    HelpBlock,
    ControlLabel
} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import alertify from 'alertify.js';
import ReCAPTCHA from 'react-google-recaptcha';

export class AddRestaurant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            restaurant: "",
            nameValid: false,
            phoneValid: false,
            emailValid: false,
            restaurantValid: false,
            addressValid: false,
            verified: true
        };
        this.getValidationState = this.getValidationState.bind(this);
        this.setValidationState = this.setValidationState.bind(this);
        this.customerVerified = this.customerVerified.bind(this);
        this.addRestaurant = this.addRestaurant.bind(this);
    }

    getValidationState(type, value) {
        return validate(type, value);
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

    customerVerified(value) {
        if (value) {
            this.setState({verified: true});
        }
    }

    addRestaurant() {
        if (!this.state.verified) {
            alertify.logPosition('top right');
            alertify.error(i18next.t("USER_INVALID_MESSAGE"));
            return;
        }

        if (!this.state.phoneValid || !this.state.nameValid || !this.state.emailValid || !this.state.addressValid
            || !this.state.restaurantValid) {
            alertify.logPosition('top right');
            alertify.error(i18next.t("INVALID_DATA_MESSAGE"));
            return;
        }
        let data = {
            "first_name": this.state.firstName,
            "last_name": this.state.lastName,
            "phone": this.state.phone,
            "email": this.state.email,
            "address": this.state.address,
            "restaurant": this.state.restaurant
        };
        this.props.submitRequest(data, () => {

        });
    }

    render() {
        return (
            <div style={{"height": "100%"}}>
                <DashboardContainer/>
                <div className="customer-container">
                    <div className="content-container">
                        <h3 className="about-us-title">{i18next.t("ADD_YOUR_RESTAURANT")}</h3>
                        <p className="about-us-string">{i18next.t("ADD_YOUR_RESTAURANT_STRING")}</p>
                        <Form horizontal className="address-form">
                            <Col xs={12} sm={8}>
                                <FormGroup controlId="firstNameGroup"
                                           validationState={this.getValidationState('name', this.state.firstName)}>
                                    <ControlLabel>{i18next.t("FIRST_NAME")}</ControlLabel>
                                    <FormControl onChange={(e) => {
                                        this.setState({firstName: e.target.value});
                                        this.setValidationState('name', e.target.value)
                                    }} placeholder={i18next.t("FIRST_NAME")} type="text" value={this.state.firstName}/>
                                    <FormControl.Feedback />
                                    <HelpBlock>{i18next.t("REQUIRED")}</HelpBlock>
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={8}>
                                <FormGroup controlId="lastNameGroup"
                                           validationState={this.getValidationState('name', this.state.lastName)}>
                                    <ControlLabel>{i18next.t("LAST_NAME")}</ControlLabel>
                                    <FormControl onChange={(e) => {
                                        this.setState({lastName: e.target.value});
                                        this.setValidationState('lastName', e.target.value)
                                    }} placeholder={i18next.t("LAST_NAME")} type="text" value={this.state.lastName}/>
                                    <FormControl.Feedback />
                                    <HelpBlock>{i18next.t("REQUIRED")}</HelpBlock>
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={8}>
                                <FormGroup controlId="restaurantGroup"
                                           validationState={this.getValidationState('name', this.state.restaurant)}>
                                    <ControlLabel>{i18next.t("RESTAURANT")}</ControlLabel>
                                    <FormControl onChange={(e) => {
                                        this.setState({lastName: e.target.value});
                                        this.setValidationState('restaurant', e.target.value)
                                    }} placeholder={i18next.t("RESTAURANT")} type="text" value={this.state.restaurant}/>
                                    <FormControl.Feedback />
                                    <HelpBlock>{i18next.t("REQUIRED")}</HelpBlock>
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={8}>
                                <FormGroup controlId="phoneGroup"
                                           validationState={this.getValidationState('phone', this.state.phone)}>
                                    <ControlLabel>{i18next.t("PHONE_NUMBER")}</ControlLabel>
                                    <FormControl onChange={(e) => {
                                        this.setState({phone: e.target.value});
                                        this.setValidationState('phone', e.target.value)
                                    }} placeholder={i18next.t("PHONE_NUMBER")} type="tel" value={this.state.phone}/>
                                    <FormControl.Feedback />
                                    <HelpBlock>{i18next.t("REQUIRED")}</HelpBlock>
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={8}>
                                <FormGroup controlId="emailGroup"
                                           validationState={this.getValidationState('email', this.state.email)}>
                                    <ControlLabel>{i18next.t("EMAIL")}</ControlLabel>
                                    <FormControl onChange={(e) => {
                                        this.setState({email: e.target.value});
                                        this.setValidationState('email', e.target.value)
                                    }} placeholder={i18next.t("EMAIL")} type="email" value={this.state.email}/>
                                    <FormControl.Feedback />
                                    <HelpBlock>{i18next.t("REQUIRED")}</HelpBlock>
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={8}>
                                <FormGroup controlId="ramerksGroup">
                                    <ControlLabel>{i18next.t("ADDRESS")}</ControlLabel>
                                    <FormControl componentClass="textarea" onChange={(e) => {
                                        this.setState({address: e.target.value});
                                    }} placeholder={i18next.t("ADDRESS")} type="text" value={this.state.address}/>
                                    <FormControl.Feedback />
                                    <HelpBlock>{i18next.t("REQUIRED")}</HelpBlock>
                                </FormGroup>
                            </Col>
                        </Form>
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
                        {this.state.verified &&
                        <Row className="order-button-container">
                            <Col xs={12}>
                                <Button className="center-block submit-button"
                                        onClick={this.addRestaurant}>{i18next.t("ADD_YOUR_RESTAURANT")}</Button>
                            </Col>
                        </Row>
                        }
                    </div>
                </div>
                <PageFooter/>
            </div>
        )
    }
}