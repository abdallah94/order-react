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
    render() {
        return (
            <Row className="cart-element-container">
                <Col xs={4}>
                    <NumericInput size={1} min={0} max={100} value={50}/>
                </Col>
                <Col xs={4}>
                    <h5 className="card-item-name">{this.props.name}</h5>
                </Col>
                <Col xs={2}>
                    <h5 className="card-item-price">{this.props.price}$</h5>
                </Col>
                <Col xs={2}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </Col>
            </Row>
        )

    }

}