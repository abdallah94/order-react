/**
 * Created by Abdallah on 8/5/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {Constants} from '../../../utils';
/*Modules*/
import React from 'react';
import {Modal, Button, Form, FormGroup, ControlLabel, FormControl, Image, Col} from 'react-bootstrap'
import i18next from 'i18next';
import Dropzone from 'react-dropzone';

export class RestaurantModal extends React.Component {

    constructor(props) {
        super(props);
        this.addRestaurant = this.addRestaurant.bind(this);
        this.setValue = this.setValue.bind(this);
        this.state = {
            name: "",
            phone: "",
            email: "",
            password: ""
        }
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
        let headerText = i18next.t("ADD_RESTAURANT");
        return (
            <Modal show={this.props.showModal} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{headerText}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col xs={12}>
                        <Form>
                            <FormGroup controlId="name">
                                <ControlLabel>{i18next.t("RESTAURANT")}</ControlLabel>
                                <FormControl type="text" value={this.state.name} onChange={this.setValue}/>
                            </FormGroup>
                            <FormGroup controlId="phone">
                                <ControlLabel>{i18next.t("PHONE_NUMBER")}</ControlLabel>
                                <FormControl type="tel" value={this.state.description}
                                             onChange={this.setValue}/>
                            </FormGroup>
                            <FormGroup controlId="email">
                                <ControlLabel>{i18next.t("EMAIL")}</ControlLabel>
                                <FormControl type="email" value={this.state.price}
                                             onChange={this.setValue}/>
                            </FormGroup>
                            <FormGroup controlId="password">
                                <ControlLabel>{i18next.t("PASSWORD")}</ControlLabel>
                                <FormControl type="password" value={this.state.price}
                                             onChange={this.setValue}/>
                            </FormGroup>
                        </Form>
                    </Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.addRestaurant}>{i18next.t("SAVE")}</Button>
                    <Button onClick={this.props.close}>{i18next.t("CLOSE")}</Button>
                </Modal.Footer >
            </Modal >
        )
    }
}