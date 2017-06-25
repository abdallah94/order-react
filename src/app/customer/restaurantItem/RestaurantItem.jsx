/**
 * Created by Abdallah on 5/18/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {Constants} from '../../../utils';
import {PathConstants} from '../../../utils';


/*Modules*/
import React from 'react';
import {Image, Row, Col, Button} from 'react-bootstrap';
import {browserHistory} from "react-router";
import i18next from 'i18next';
import Rating from 'react-rating';

export class RestaurantItem extends React.Component {
    render() {
        return (//TODO:continue UI
            <Row className="restaurant-item-container row-same-height" onClick={this.navigateToRestaurant.bind(this)}>
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
                    <Button className="restaurant-item-view">{i18next.t("VIEW")}</Button>
                </Col>
            </Row>

        )

    }

    navigateToRestaurant() {
        browserHistory.push(PathConstants.PATH_APP_CUSTOMER_RESTAURANTS + "/" + this.props.id);
    }

}