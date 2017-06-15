/**
 * Created by Abdallah on 6/6/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {OrderContainer} from '../';
import {CartContainer} from '../../customer';

/*Modules*/
import React from 'react';
import {Row, Col} from 'react-bootstrap';

export class Menu extends React.Component {
    render() {
        return (
            <Row className="body-container">
                <Col xs={12} md={8} className="orders-container">
                    {!!this.props.items && this.props.items.map((item) => (
                        <OrderContainer restaurantID={this.props.restaurantID} key={item.id} {...item}
                                        edit={this.props.edit}/>
                    ))}
                </Col>
                <Col xs={12} md={3} mdOffset={1} className="cart-container">
                    <CartContainer/>
                </Col>
            </Row>
        )
    }
}