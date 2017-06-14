/**
 * Created by Abdallah on 6/3/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {Image, Row, Col, Button} from 'react-bootstrap';
/*Modules*/
import React from 'react';
import i18next from 'i18next';

export class Order extends React.Component {
    render() {
        return (
            <Row className="order-container">
                <Col md={3} xs={12}>
                    <Image src={this.props.imageUrl} className="order-image"/>
                </Col>
                <Col md={5} xs={12}>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.description}</p>
                </Col>
                {!this.props.edit &&
                <Col mdOffset={0} md={4} xsOffset={2} xs={8}>
                    <Col xs={6}>
                        <h3 className="text-center">{this.props.price} $</h3>
                    </Col>
                    <Col xs={6}>
                        <h3 className="text-center"><i className="fa fa-plus-square add-symbol" aria-hidden="true"></i></h3>
                    </Col>
                </Col>
                }
                {this.props.edit &&
                <Col mdOffset={2} md={2} xsOffset={3} xs={6}>
                    <Button className="order-button-edit text-center">{i18next.t("EDIT")}</Button>
                </Col>
                }
            </Row>

        )

    }

}