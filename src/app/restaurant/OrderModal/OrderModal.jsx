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
import Select from 'react-select';

export class OrderModal extends React.Component {

    constructor(props) {
        super(props);
        this.addOrder = this.addOrder.bind(this);
        this.editOrder = this.editOrder.bind(this);
        this.setValue = this.setValue.bind(this);
        this.handleSelectCategory = this.handleSelectCategory.bind(this);
        let {name, description, price}=props;
        this.state = {
            name: name,
            description: description,
            price: price,
            image: "",
            categories: [],
            category_id: 0
        }
    }

    componentWillMount() {
        this.props.fetchCategories(this.props.restaurantID);
    }

    componentWillReceiveProps(nextProps) {
        let {name, description, price, image, category, categories}=nextProps;
        console.log(name);
        if (this.state.name==="" && name !== this.state.name) {
            this.setState({
                name: name,
                description: description,
                price: price,
                image: image,
                category_id: category,
                categories: categories
            });
        }
        else {
            this.setState({
                category_id: category,
                categories: categories
            })
        }

    }

    setValue(e) {
        this.setState({[e.target.id]: e.target.value});

    }

    addOrder() {
        let values = this.state;
        delete values.categories;
        if (!this.state.category_id) {
            delete values.category_id;
        }
        values.restaurant_id = this.props.restaurantID;
        this.props.addOrder(values, () => {
            this.props.close();
        });
    }

    editOrder() {
        let values = this.state;
        values.restaurant_id = this.props.restaurantID;
        values.id = this.props.itemID;
        this.props.editOrder(values, () => {
            this.props.close();
        });
    }

    handleSelectCategory(value) {
        if (!value) {
            value = 0;
        }
        this.setState({category_id: value}, () => {
            if (value > 0 && value < this.state.categories) {

            }
        });
    }

    render() {
        let headerText = (this.props.newOrder) ? i18next.t("NEW_ORDER") : i18next.t("EDIT_ORDER");
        return (
            <Modal show={this.props.showModal} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{headerText}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col mdOffset={0} md={4} xsOffset={2} xs={8}>
                        <Dropzone className="no-style" onDropAccepted={(file) => {
                            console.log(file[0]);
                            this.setState({image: file[0]});
                        }} multiple={false} accept={"image/png,image/jpeg"}>
                            <Image className="order-modal-image"
                                   src={this.state.image ? this.state.image.preview : Constants.OFFER_3}/>
                        </Dropzone>
                    </Col>
                    <Col md={8} xs={12}>
                        <Form>
                            <FormGroup controlId="name">
                                <ControlLabel>{i18next.t("ITEM_NAME")}</ControlLabel>
                                <FormControl type="text" value={this.state.name} onChange={this.setValue}/>
                            </FormGroup>
                            <FormGroup controlId="description">
                                <ControlLabel>{i18next.t("ITEM_DESCRIPTION")}</ControlLabel>
                                <FormControl componentClass="textarea" value={this.state.description}
                                             onChange={this.setValue}/>
                            </FormGroup>
                            <FormGroup controlId="price">
                                <ControlLabel>{i18next.t("ITEM_PRICE")}</ControlLabel>
                                <FormControl type="number" value={this.state.price}
                                             onChange={this.setValue}/>
                            </FormGroup>
                            <FormGroup controlId="category_id">
                                <Select value={this.state.category_id} multi={false} simpleValue={true}
                                        disabled={false} onChange={this.handleSelectCategory}
                                        options={this.state.categories}>
                                </Select>
                            </FormGroup>
                        </Form>
                    </Col>
                </Modal.Body>
                <Modal.Footer>
                    {this.props.newOrder &&
                    <Button onClick={this.addOrder}>{i18next.t("SAVE")}</Button>
                    }
                    {!this.props.newOrder &&
                    <Button onClick={this.editOrder}>{i18next.t("SAVE")}</Button>
                    }
                    <Button onClick={this.props.close}>{i18next.t("CLOSE")}</Button>
                </Modal.Footer >
            </Modal >
        )

    }

}