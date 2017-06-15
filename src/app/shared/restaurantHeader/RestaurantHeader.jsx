/**
 * Created by Abdallah on 6/3/2017.
 */

/*CSS*/
import './style.css'

//*Modules*/
import React from 'react';
import {Image, Row, Col, Button} from 'react-bootstrap';
import {browserHistory} from "react-router";
import i18next from 'i18next';
import Rating from 'react-rating';

export class RestaurantHeader extends React.Component {
    render() {
        return (
            <Row className="restaurant-header-container">
                <Col xs={6} md={3}>
                    <Image responsive src={this.props.imageUrl} className="restaurant-item-restaurant-logo"/>
                </Col>
                <Col xs={6} md={3}>
                    <p className="restaurant-item-restaurant-name">{this.props.name}</p>
                    <h3 className="restaurant-item-restaurant-phone">{this.props.phoneNum}</h3>
                </Col>
                <Col xs={6} md={3}>
                    <div className="restaurants-item-rating">
                        <Rating readonly initialRate={this.props.rating} empty="fa fa-star-o fa-2x medium"
                                full="fa fa-star fa-2x medium"/>
                        <h6 className="restaurant-item-delivery-time">{i18next.t("DELIVERY")} {this.props.deliveryTime} {i18next.t("MIN")}</h6>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <h2 className="restaurant-item-min-order">{this.props.minOrder} $</h2>
                </Col>
            </Row>
        )

    }

}