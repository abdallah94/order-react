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
            <Row>
                <Col xs={12} md={6}>
                    {!!this.props.items && this.props.items.map((item) => (
                        <OrderContainer key={item.id} {...item}/>
                    ))}
                </Col>
                <Col xs={12} md={6}>
                    <CartContainer/>
                </Col>
            </Row>
        )
    }
}