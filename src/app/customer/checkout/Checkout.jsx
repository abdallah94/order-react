/**
 * Created by Abdallah on 6/17/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {CartContainer} from '../';

/*Modules*/
import React from 'react';
import {Col, Row} from 'react-bootstrap';

export class Checkout extends React.Component {
    render() {
        return (
            <Row className="body-container">
                <h2>Summary</h2>
                <Col xs={12} className="checkout-cart-container">
                    <CartContainer/>
                </Col>
            </Row>
        )

    }

}