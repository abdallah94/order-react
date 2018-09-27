import "./style.css";
/* Components */
import {Constants} from '../../../utils';
import {ItemModalContainer} from '../../shared/ItemModal/ItemModalContainer';
/*Modules*/
import React from "react";
import i18next from "i18next";
import {Image, Row, Col, Button} from "react-bootstrap";


export class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            newOrder: true,
            itemID: -1,
            name: "",
            description: "",
            price: "",
            category: 0,
            sizes: [],
            extras: [],
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.addOrder = this.addOrder.bind(this);
        this.editOrder = this.editOrder.bind(this);
        this.addExtraOrder = this.addExtraOrder.bind(this);
    }

    addOrder(size, price, extras = "", notes = "") {
        price = price ? price : this.props.price;
        if (!(this.props.extras && this.props.extras.length)) {
            this.props.addOrder(this.props.id, 1, this.props.name, price, this.props.restaurantID,
                this.props.minOrder, this.props.deliveryTime, this.props.deliveryFee, this.props.restaurantName, size, extras, notes);
        }
        else {
            this.setState({price: price, size: size}, () => {
                this.open();
            })
        }
    }

    addExtraOrder(size, price, extras = "", notes = "") {
        this.props.addOrder(this.props.id, 1, this.props.name, price, this.props.restaurantID,
            this.props.minOrder, this.props.deliveryTime, this.props.deliveryFee, this.props.restaurantName, size, extras, notes);
    }

    editOrder() {
        this.props.editOrder(this.props.id, this.props.name, this.props.description, this.props.price, this.props.imageUrl,
            this.props.category_id, this.props.sizes, this.props.extras, this.props.size, this.props.extras);
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({
            showModal: true,
        });
    }

    render() {
        return (
            <div>
                <Row className="order-container">
                    <Col md={3} xs={12}>
                        <Image src={this.props.imageUrl ? this.props.imageUrl : Constants.FOODY_EXPRESS_LOGO}
                               className="order-image"/>
                    </Col>
                    <Col md={9} xs={12} className="no-padding">
                        <Row className="no-margins">
                            <div>
                                <Col md={5} xs={12} className="no-padding-right">
                                    <h2 className="no-margin-top">{this.props.name}</h2>
                                </Col>
                                {!(this.props.sizes && this.props.sizes.length) &&
                                <Col mdOffset={0} md={3} xsOffset={2} xs={4}>
                                    <h4 className="text-align-center center-block order-price">{this.props.price}</h4>
                                </Col>
                                }
                                {!this.props.edit && this.props.sizes && this.props.sizes.length > 0 &&
                                <Col mdOffset={0} md={4} xsOffset={2} xs={6}>
                                    {this.props.sizes.map((size, i) => (
                                        <h4 key={i} className="text-align-right" onClick={() => {
                                            this.addOrder(size, size.pivot.price)
                                        }}>{size.name} {size.pivot.price} <i
                                            className="fa fa-plus-square add-symbol"
                                            aria-hidden="true"/></h4>
                                    ))}
                                </Col>}
                            </div>
                            {!this.props.edit && !(this.props.sizes && this.props.sizes.length) &&
                            <Col mdOffset={0} md={4} xsOffset={3} xs={3} className="no-padding">
                                <h3 className="text-center no-margin-top" onClick={() => {
                                    this.addOrder()
                                }}><i className="fa fa-plus-square add-symbol"
                                      aria-hidden="true"/>
                                </h3>
                            </Col>}
                            {this.props.edit &&
                            <Col mdOffset={0} md={4} xsOffset={3} xs={3}>
                                <Button className="order-button-edit text-center"
                                        onClick={this.editOrder}>{i18next.t("EDIT")}</Button>
                            </Col >
                            }
                        </Row>
                        <Col xs={12}>
                            {this.props.description &&
                            <p>{this.props.description}</p>
                            }
                            {(this.props.description_ar || this.props.name_ar) &&
                            <div>
                                <h2>{this.props.name_ar}</h2>
                                <p>{this.props.description_ar}</p>
                            </div>}
                        </Col>
                    </Col>
                </Row>
                <ItemModalContainer show={this.state.showModal} close={this.close} itemID={this.props.itemID}
                                    name={this.props.name} description={this.props.description} size={this.state.size}
                                    extras={this.props.extras} price={this.state.price} image={this.props.image}
                                    addOrder={this.addExtraOrder} maxExtras={this.props.maxExtras}/>
            </div>
        )
    }
}