/**
 * Created by Abdallah on 6/15/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import NumericInput from 'react-numeric-input';
/*Modules*/
import React from 'react';
import {Row, Col} from 'react-bootstrap';

export class CartElement extends React.Component {

    constructor(props) {
        super(props);
        this.changeNumber = this.changeNumber.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    changeNumber(newNumber) {
        if (newNumber != this.props.number) {
            this.props.editItemNumber(this.props.id, newNumber, this.props.name, this.props.price, this.props.restaurantID,
                this.props.minOrder, this.props.deliveryTime, this.props.deliveryFee, this.props.restaurantName);
        }

    }

    removeItem() {
        this.props.editItemNumber(this.props.id, 0, this.props.name, this.props.price, this.props.restaurantID,
            this.props.minOrder, this.props.deliveryTime, this.props.deliveryFee, this.props.restaurantName);
    }

    render() {
        return (
            <Row className="cart-element-container">
                {!this.props.checkout &&
                <Col xs={4}>
                    <NumericInput size={1} min={0} max={100} value={this.props.number} onChange={this.changeNumber}/>
                </Col>
                }
                {this.props.checkout &&
                <Col xs={4}>
                    <h5 className="text-align-center">{this.props.number}</h5>
                </Col>
                } 
                <Col xs={4} className="no-padding">
                    <h6 className="card-item-name">{this.props.name}</h6>
                </Col>
                <Col xs={2}>
                    <h5 className="card-item-price">{this.props.price}$</h5>
                </Col>
                <Col xs={2}>
                    <i className="fa fa-times pointer-cursor" aria-hidden="true" onClick={this.removeItem}></i>
                </Col>
            </Row>
        )

    }

}