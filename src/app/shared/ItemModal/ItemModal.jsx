import "./style.css";
/* Components */
import {Constants} from "../../../utils";
/*Modules*/
import React from "react";
import {
    Modal,
    Button,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    Image,
    Col,
    Row,
    Input,
    Panel
} from "react-bootstrap";
import i18next from "i18next";

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
            notes: ""
        }
    }

    componentWillMount() {
        let {name, description, price, image, notes}=Object.assign({}, this.props);
        let addedExtras = [];
        for (let i in this.props.extras) {
            addedExtras[i] = false;
        }
        this.setState({
            name: name,
            description: description,
            price: price,
            image: image,
            addedExtras: addedExtras,
            numAddedExtras: 0,
            notes: notes
        });
    }

    componentWillReceiveProps(nextProps) {
        let {name, description, price, image}=Object.assign({}, nextProps);
        let addedExtras = [];
        for (let i in this.props.extras) {
            addedExtras[i] = false;
        }
        this.setState({
            name: name,
            description: description,
            price: price,
            image: image,
            addedExtras: addedExtras,
            numAddedExtras: 0
        });
    }

    changeExtraState(i) {
        let numAddedExtras = this.state.numAddedExtras;
        let addedExtras = Object.assign([], this.state.addedExtras);
        addedExtras[i] = !addedExtras[i];
        let price = parseFloat(this.state.price);
        if (!addedExtras[i]) {
            price -= this.props.extras[i].price;
            numAddedExtras--;
        }
        else {
            if (this.props.maxExtras && this.state.numAddedExtras === this.props.maxExtras) {
                return;
            }
            price += parseFloat(this.props.extras[i].price);
            numAddedExtras++;
        }
        this.setState({addedExtras, price: price, numAddedExtras: numAddedExtras});
    }

    addOrder() {
        let extras = [];
        for (let i in this.state.addedExtras) {
            if (this.state.addedExtras[i]) {
                extras.push(this.props.extras[i].name);
            }
        }
        this.props.addOrder(this.state.price, extras,this.state.notes);
        this.closeDialog();
    }


    closeDialog() {
        let addedExtras = this.state.addedExtras;
        for (let i in addedExtras) {
            addedExtras[i] = false;
        }
        this.setState({
            price: this.props.price,
            addedExtras: addedExtras
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
                            <h3>{i18next.t("EXTRAS")} ({this.props.maxExtras ? this.props.maxExtras : ""})</h3>
                            {this.props.extras && this.state.addedExtras && this.props.extras.map((extra, i) => (
                                <Col key={i} xs={12} className="extra-container">
                                    <FormGroup controlId="extra-name">
                                        <Col xs={12} className="no-padding">
                                            <input type="checkbox" className="extra-checkbox"
                                                   checked={this.state.addedExtras[i]}
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
                            <Panel className="category-panel">
                                <Panel.Title toggle>
                                    <h3>{i18next.t("ADD_NOTES")}</h3>
                                </Panel.Title>
                                <Panel.Collapse>
                                    <Panel.Body>
                                        <FormGroup controlId="notesGroup">
                                            <FormControl componentClass="textarea" onChange={(e) => {
                                                this.setState({notes: e.target.value});
                                            }} type="text" value={this.state.notes}/>
                                        </FormGroup>
                                    </Panel.Body>
                                </Panel.Collapse>
                            </Panel>
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