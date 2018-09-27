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
        let deliveryTime = this.props.deliveryTime;
        if (this.props.restaurantDeliveries && this.props.restaurantDeliveries.length) {
            this.props.restaurantDeliveries.map((del) => {
                console.log(del);
                if (del.area === this.props.area) {
                    deliveryTime = del.time;
                }
            })
        }
        return (//TODO:continue UI
            <Row className="restaurant-item-container row-same-height" onClick={this.navigateToRestaurant.bind(this)}>
                <Col xs={6} md={3}>
                    <Image responsive src={this.props.imageUrl} className="restaurant-item-restaurant-logo"/>
                </Col>
                <Col xs={6} md={3} className="no-padding">
                    <p className="restaurant-item-restaurant-name">{this.props.name}</p>
                </Col>
                <Col xs={6} md={3} className="no-padding">
                    <h6 className="restaurant-item-delivery-time">{i18next.t("DELIVERY")} {deliveryTime} {i18next.t("MIN")}</h6>
                </Col>
                <Col xs={6} md={3} className="no-padding">
                    <Button className="restaurant-item-view">{i18next.t("VIEW")}</Button>
                </Col>
            </Row>

        )

    }

    navigateToRestaurant() {
        if (this.props.admin) {
            browserHistory.push(PathConstants.PATH_APP_RESTAURANT + "/" + this.props.id);
        }
        else {
            browserHistory.push(PathConstants.PATH_APP_CUSTOMER_RESTAURANTS + "/" + this.props.id);
        }
    }

}
RestaurantItem.defaultProps = {
    imageUrl: Constants.FOOD_IMG,
    name: "Awesome Restaurant",
    deliveryTime: 10,
    rating: 1,
    minOrder: 20,
};