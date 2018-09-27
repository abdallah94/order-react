import "./style.css";
/* Components */
import {Constants} from "../../../utils";
/*Modules*/
import React from "react";
import {Modal, Form, FormGroup, Col, Radio, Row} from "react-bootstrap";
import i18next from "i18next";

export class ChooseCheckoutModal extends React.Component {

    constructor(props) {
        super(props);
        this.addRestaurant = this.addRestaurant.bind(this);
        this.setValue = this.setValue.bind(this);
        this.setDelivery = this.setDelivery.bind(this);
        this.setCheckout = this.setCheckout.bind(this);
        this.state = {
            name: "",
            phone: "",
            email: "",
            password: ""
        }
    }

    setDelivery() {
        this.props.chooseCheckoutType(Constants.DELIVERY);
        this.setState({
            delivery: true,
        });
        this.props.close();
    }

    setCheckout() {
        this.props.chooseCheckoutType(Constants.CHECKOUT);
        this.setState({
            delivery: false,
        });
        this.props.close();
    }

    setValue(e) {
        this.setState({[e.target.id]: e.target.value});

    }

    addRestaurant() {
        let values = this.state;
        values.restaurant_id = this.props.restaurantID;
        this.props.addRestaurant(values, () => {
            this.props.close();
        });
    }

    render() {
        let headerText = i18next.t("CHOOSE_CHECKOUT_TYPE");
        return (
            <Row>
                <Modal show={this.props.showModal} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{headerText}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col xs={12}>
                                <Form>
                                    <FormGroup>
                                        <Col xs={6}>
                                            <Radio className="text-align-center" name="order"
                                                   checked={this.props.checkoutType === Constants.DELIVERY}
                                                   onChange={this.setDelivery}>
                                                {i18next.t("Delivery")}
                                            </Radio>
                                        </Col>
                                        <Col xs={6}>
                                            <Radio className="text-align-center" name="order"
                                                   onChange={this.setCheckout}
                                                   checked={this.props.checkoutType === Constants.CHECKOUT}>
                                                {i18next.t("PICK_UP")}
                                            </Radio>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal >
            </Row>
        )
    }
}