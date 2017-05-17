/**
 * Created by Abdallah on 5/18/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {Constants} from '../../../utils';

/*Modules*/
import React from 'react';
import {Image, Row, Col} from 'react-bootstrap';
import i18next from 'i18next';

export class RestaurantItem extends React.Component {
    render() {
        return (//TODO:continue UI
            <Row className="restaurant-item-container">
                <Col xs={6} md={3}>
                    <Image responsive src={this.props.imageUrl} className="restaurant-item-restaurant-logo"/>
                </Col>
                <Col xs={6} md={3}>
                    <p className="restaurant-item-restaurant-name">{this.props.name}</p>
                    <h3 className="restaurant-item-restaurant-phone">{this.props.phoneNum}</h3>
                </Col>
                <Col xs={6} md={3}>
                    <h4>{this.props.rating}</h4>
                    <h6 className="restaurant-item-delivery-time">{i18next.t("DELIVERY")} {this.props.deliveryTime}</h6>
                </Col>
                <Col xs={6} md={3}>
                    <h2 className="restaurant-item-min-order">{this.props.minOrder} {i18next.t("MIN")}</h2>
                </Col>
            </Row>

        )

    }

}