/**
 * Created by Abdallah on 8/5/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {Constants} from '../../../utils';
/*Modules*/
import React from 'react';
import {
    Modal,
    Button,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    Image,
    Col,
    Checkbox,
    Row,
    Input
} from 'react-bootstrap'
import i18next from 'i18next';
import Dropzone from 'react-dropzone';
import Select from 'react-select';

export class ItemModal extends React.Component {

    constructor(props) {
        super(props);
        this.addOrder = this.addOrder.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.changeExtraState = this.changeExtraState.bind(this);
        let {name, description, price}=props;
        this.state = {
            name: name,
            description: description,
            price: price,
            image: "",
            extras: [],
            addedExtras: []
        }
    }

    componentWillReceiveProps(nextProps) {
        let {name, description, price, image, extras}=nextProps;
        let addedExtras = [];
        for (let i in extras) {
            addedExtras[i] = false;
        }
        this.setState({
            name: name,
            description: description,
            price: price,
            image: image,
            extras: extras,
            addedExrtas: addedExtras
        });
    }

    changeExtraState(i) {
        let addedExtras = this.state.addedExtras;
        addedExtras[i] = !addedExtras[i];
        let price = parseFloat(this.state.price);
        if (!addedExtras[i]) {
            price -= this.state.extras[i].price;
        }
        else {
            price += parseFloat(this.state.extras[i].price);
        }
        this.setState({addedExtras: addedExtras, price: price});
    }

    addOrder() {
        let extras = [];
        for (let i in this.state.addedExtras) {
            if (this.state.addedExtras[i]) {
                extras.push(this.state.extras[i].name);
            }
        }
        this.props.addOrder(this.state.price, extras);
        this.closeDialog();
    }


    closeDialog() {
        let addedExtras=this.state.addedExtras;
        for (let i in addedExtras) {
            addedExtras[i] = false;
        }
        this.setState({
            price: this.props.price,
            addedExrtas: addedExtras
        });
        this.props.close();
    }

    setExtra(index, name, price) {
        let extras = this.state.price;
        if (name) {
            extras[index].name = name;
        }
        if (price) {
            extras[index].price = price;
        }
    }

    render() {   
        return (
            <Modal show={this.props.showModal} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{i18next.t("CHOOSE_ITEM_OPTIONS")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="no-margins">
                        <Col mdOffset={0} md={4} xsOffset={2} xs={8}>
                            <Image className="order-modal-image"
                                   src={this.state.image ? this.state.image.preview : Constants.OFFER_3}/>
                        </Col>
                        <Form>
                            <Col md={8} xs={12}>
                                <FormGroup controlId="name">
                                    <ControlLabel>{i18next.t("ITEM_NAME")}</ControlLabel>
                                    <FormControl type="text" value={this.state.name} disabled/>
                                </FormGroup>
                                <FormGroup controlId="description">
                                    <ControlLabel>{i18next.t("ITEM_DESCRIPTION")}</ControlLabel>
                                    <FormControl componentClass="textarea" value={this.state.description}
                                                 disabled/>
                                </FormGroup>
                                <FormGroup controlId="price">
                                    <ControlLabel>{i18next.t("ITEM_PRICE")}</ControlLabel>
                                    <FormControl type="number" value={this.state.price}
                                                 disabled/>
                                </FormGroup>
                            </Col>
                            <h3>{i18next.t("EXTRAS")}</h3>
                            {this.state.extras && this.state.extras.map((extra, i) => (
                                <Col key={i} xs={12} className="extra-container">
                                    <FormGroup controlId="extra-name">
                                        <Col xs={12} className="no-padding">
                                            <input type="checkbox" className="extra-checkbox"
                                                   value={this.state.addedExtras[i]}
                                                   onChange={(e) => {
                                                       this.changeExtraState(i)
                                                   }}/>
                                            <p className="extra-checkbox-label">{extra.name}</p>
                                            <h6 className="extra-checkbox-price">{extra.price}</h6>
                                        </Col>
                                    </FormGroup>
                                </Col>
                            ))
                            }
                        </Form>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.addOrder}>{i18next.t("ADD")}</Button>
                    <Button onClick={this.closeDialog}>{i18next.t("CLOSE")}</Button>
                </Modal.Footer >
            </Modal >
        )

    }
}