/**
 * Created by Abdallah on 8/5/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {Constants} from '../../../utils';
/*Modules*/
import React from 'react';
import {Modal, Button, Form, FormGroup, ControlLabel, FormControl, Image, Col, Checkbox, Row} from 'react-bootstrap'
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
        this.closeDialog = this.closeDialog.bind(this);
        this.showSizes = this.showSizes.bind(this);
        this.setSize = this.setSize.bind(this);
        this.getSize = this.getSize.bind(this);
        let {name, description, price}=props;
        this.state = {
            name: name,
            description: description,
            price: price,
            image: "",
            categories: [],
            category_id: 0,
            showSizes: false,
            sizes: [],
            newExtra: {name: "", price: 0},
        }
    }

    componentWillMount() {
        this.props.fetchCategories(this.props.restaurantID);
    }

    componentWillReceiveProps(nextProps) {
        let {name, description, price, image, category, categories, sizes, extras}=nextProps;
        if (sizes && sizes.length) {
            let newSizes = [{name: "small", price: sizes[0].pivot.price}, {
                name: "medium",
                price: sizes[1].pivot.price
            }, {name: "large", price: sizes[2].pivot.price}];
            sizes = newSizes;
        }
        if ((this.state.name === "" && name !== this.state.name) || this.props.itemID !== nextProps.itemID) {
            this.setState({
                name: name,
                description: description,
                price: price,
                image: image,
                category_id: category,
                categories: categories,
                showSizes: false,
                sizes: sizes,
                extras: extras,
                newExtra: {name: "", price: 0}
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
        delete values.sizes;
        if (!this.state.category_id) {
            delete values.category_id;
        }
        values.restaurant_id = this.props.restaurantID;
        if (!(this.state.sizes && this.state.sizes.length && this.state.sizes[0].price && this.state.sizes[1].price && this.state.sizes[2].price)) {
            delete values.sizes;
        }
        let newSizes = values.sizes;
        if (newSizes) {
            newSizes = [{size_id: 1, price: newSizes[0].price}, {size_id: 2, price: newSizes[1].price}, {
                size_id: 3,
                price: newSizes[2].price
            }];
        }
        values.sizes = newSizes;
        let extras = this.state.extras;
        if (this.state.newExtra.name !== "" || this.state.newExtra.price !== 0) {
            if (extras) {
                extras.push(this.state.newExtra);
            }
            else {
                extras = [];
                extras.push(this.state.newExtra);
            }
            values.extras = extras;
        }
        delete values.newExtra;
        this.setState({  newExtra: {name: "", price: 0},sizes:this.props.sizes});
        this.props.addOrder(values, () => {
            this.props.close();
        });
    }

    editOrder() {
        let values = this.state;
        values.restaurant_id = this.props.restaurantID;
        values.id = this.props.itemID;
        if (!(this.state.sizes && this.state.sizes.length && this.state.sizes[0].price && this.state.sizes[1].price && this.state.sizes[2].price)) {
            delete values.sizes;
        }
        let newSizes = values.sizes;
        if (newSizes) {
            newSizes = [{size_id: 1, price: newSizes[0].price}, {size_id: 2, price: newSizes[1].price}, {
                size_id: 3,
                price: newSizes[2].price
            }];
        }
        values.sizes = newSizes;
        let extras = this.state.extras;
        if (this.state.newExtra.name !== "" || this.state.newExtra.price !== 0) {
            extras.push(this.state.newExtra);
            values.extras = extras;
        }
        delete values.newExtra;
        this.setSize({  newExtra: {name: "", price: 0},sizes:this.props.sizes});
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

    closeDialog() {
        this.setState({showSizes: false});
        this.props.close();
    }

    showSizes() {
        this.setState({showSizes: !this.state.showSizes});
        if (!(this.state.sizes && this.state.sizes.length)) {
            let sizes = [{name: "small", price: 0}, {name: "medium", price: 0}, {name: "large", price: 0}];
            this.setState({sizes: sizes});
        }
    }

    getSize(name) {
        for (let size of this.state.sizes) {
            if (size.name === name) {
                return size.price;
            }
        }
        return 0;
    }

    setSize(name, price) {
        let sizes = this.state.sizes;
        if(sizes) {
            for (let size of sizes) {
                if (size.name === name) {
                    size.name = name;
                    size.price = price;
                }
            }
            this.setState({sizes: sizes});
        }
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
        let headerText = (this.props.newOrder) ? i18next.t("NEW_ORDER") : i18next.t("EDIT_ORDER");
        return (
            <Modal show={this.props.showModal} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{headerText}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="no-margins">
                        <Col mdOffset={0} md={4} xsOffset={2} xs={8}>
                            <Dropzone className="no-style" onDropAccepted={(file) => {
                                console.log(file[0]);
                                this.setState({image: file[0]});
                            }} multiple={false} accept={"image/png,image/jpeg"}>
                                <Image className="order-modal-image"
                                       src={this.state.image ? this.state.image.preview : Constants.OFFER_3}/>
                            </Dropzone>
                        </Col>
                        <Form>
                            <Col md={8} xs={12}>
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
                                {!(this.props.sizes && this.props.sizes.length) && !this.state.showSizes &&
                                <FormGroup controlId="sizes">
                                    <Checkbox checked={this.state.showSizes} onChange={() => {
                                        this.showSizes()
                                    }}>
                                        {i18next.t("ADD_SIZES")}
                                    </Checkbox>
                                </FormGroup>
                                }
                            </Col>
                            <Col xs={12} className="no-padding sizes-container">
                                {this.props.showModal && ((this.props.sizes && this.props.sizes.length) || this.state.showSizes) &&
                                <div className="sizes-container">
                                    <Col md={4} xs={12} className="no-padding">
                                        <FormGroup controlId="size_small">
                                            <Col xs={12} className="no-padding">
                                                <ControlLabel>{i18next.t("SMALL")}</ControlLabel>
                                            </Col>
                                            <Col xs={12} className="no-padding">
                                                <FormControl type="number" value={this.state.sizes[0].price}
                                                             onChange={(e) => {
                                                                 this.setSize('small', e.target.value)
                                                             }}/>
                                            </Col>
                                        </FormGroup>
                                    </Col>
                                    <Col md={4} xs={12}>
                                        <FormGroup controlId="size_small">
                                            <Col xs={12} className="no-padding">
                                                <ControlLabel>{i18next.t("MEDIUM")}</ControlLabel>
                                            </Col>
                                            <Col xs={12} className="no-padding">
                                                <FormControl type="number" value={this.state.sizes[1].price}
                                                             onChange={(e) => {
                                                                 this.setSize('medium', e.target.value)
                                                             }}/>
                                            </Col>
                                        </FormGroup>
                                    </Col>
                                    <Col md={4} xs={12} className="no-padding">
                                        <FormGroup controlId="size_small">
                                            <Col xs={12} className="no-padding">
                                                <ControlLabel>{i18next.t("LARGE")}</ControlLabel>
                                            </Col>
                                            <Col xs={12} className="no-padding">
                                                <FormControl type="number" value={this.state.sizes[2].price}
                                                             onChange={(e) => {
                                                                 this.setSize('large', e.target.value)
                                                             }}/>
                                            </Col>
                                        </FormGroup>
                                    </Col>
                                </div>
                                }
                            </Col>
                            <h3>{i18next.t("EXTRAS")}</h3>
                            {this.state.extras && this.state.extras.map((extra, i) => (
                                <Col key={i} xs={12}>
                                    <Col xs={6} className="no-padding-left">
                                        <FormGroup controlId="extra-name">
                                            <Col xs={12} className="no-padding">
                                                <ControlLabel>{i18next.t("NAME")}</ControlLabel>
                                            </Col>
                                            <Col xs={12} className="no-padding">
                                                <FormControl type="text" value={extra.name}
                                                             onChange={(e) => {
                                                                 this.setExtra(i, e.target.value)
                                                             }}/>
                                            </Col>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={6} className="no-padding-right">
                                        <FormGroup controlId="extra-price">
                                            <Col xs={12} className="no-padding">
                                                <ControlLabel>{i18next.t("PRICE")}</ControlLabel>
                                            </Col>
                                            <Col xs={12} className="no-padding">
                                                <FormControl type="number" value={extra.price}
                                                             onChange={(e) => {
                                                                 this.setSize(i, "", e.target.value)
                                                             }}/>
                                            </Col>
                                        </FormGroup>
                                    </Col>
                                </Col>
                            ))
                            }
                            {this.state.newExtra &&
                            <Col xs={12}>
                                <Col xs={6} className="no-padding-left">
                                    <FormGroup controlId="extra-name">
                                        <Col xs={12} className="no-padding">
                                            <ControlLabel>{i18next.t("NAME")}</ControlLabel>
                                        </Col>
                                        <Col xs={12} className="no-padding">
                                            <FormControl type="text" value={this.state.newExtra.name}
                                                         onChange={(e) => {
                                                             this.setState({
                                                                 newExtra: {
                                                                     name: e.target.value,
                                                                     price: this.state.newExtra.price
                                                                 }
                                                             })
                                                         }}/>
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <Col xs={6} className="no-padding-right">
                                    <FormGroup controlId="extra-price">
                                        <Col xs={12} className="no-padding">
                                            <ControlLabel>{i18next.t("PRICE")}</ControlLabel>
                                        </Col>
                                        <Col xs={12} className="no-padding">
                                            <FormControl type="number" value={this.state.newExtra.price}
                                                         onChange={(e) => {
                                                             this.setState({
                                                                 newExtra: {
                                                                     name: this.state.newExtra.name,
                                                                     price: e.target.value
                                                                 }
                                                             })
                                                         }}/>
                                        </Col>
                                    </FormGroup>
                                </Col>
                            </Col>
                            }
                        </Form>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    {this.props.newOrder &&
                    <Button onClick={this.addOrder}>{i18next.t("SAVE")}</Button>
                    }
                    {!this.props.newOrder &&
                    <Button onClick={this.editOrder}>{i18next.t("SAVE")}</Button>
                    }
                    <Button onClick={this.closeDialog}>{i18next.t("CLOSE")}</Button>
                </Modal.Footer >
            </Modal >
        )

    }
}