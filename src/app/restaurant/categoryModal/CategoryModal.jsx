/**
 * Created by Abdallah on 8/5/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {Constants} from '../../../utils';
/*Modules*/
import React from 'react';
import {Modal, Button, Form, FormGroup, ControlLabel, FormControl, Image, Col, Row} from 'react-bootstrap'
import i18next from 'i18next';
import Dropzone from 'react-dropzone';

export class CategoryModal extends React.Component {

    constructor(props) {
        super(props);
        this.addCategory = this.addCategory.bind(this);
        this.setValue = this.setValue.bind(this);
        this.state = {
            name: "",
        }
    }

    setValue(e) {
        this.setState({[e.target.id]: e.target.value});

    }

    addCategory() {
        let values = this.state;
        values.restaurant_id = this.props.restaurantID;
        this.props.addCategory(values, () => {
            this.props.close();
        });
    }

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{i18next.t("NEW_CATEGORY")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col mdOffset={4} md={4} xsOffset={2} xs={8}>
                            <Form>
                                <FormGroup controlId="name">
                                    <ControlLabel>{i18next.t("CATEGORY_NAME")}</ControlLabel>
                                    <FormControl type="text" value={this.state.name} onChange={this.setValue}/>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.addCategory}>{i18next.t("SAVE")}</Button>
                    <Button onClick={this.props.close}>{i18next.t("CLOSE")}</Button>
                </Modal.Footer >
            </Modal >
        )

    }

}