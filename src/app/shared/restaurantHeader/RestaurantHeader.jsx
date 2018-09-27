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

    constructor(props) {
        super(props);
        this.getHours = this.getHours.bind(this);
    }

    render() {
        return (
            <Row className="restaurant-header-container row-same-height">
                <Col xs={6} md={3}>
                    <Image responsive src={this.props.imageUrl} className="restaurant-item-restaurant-logo"/>
                </Col>
                <Col xs={6} md={3}>
                    <p className="restaurant-item-restaurant-name">{this.props.name}</p>
                    {false &&
                    <h3 className="restaurant-item-restaurant-phone">{this.props.phoneNum}</h3>
                    }
                </Col>
                <Col xs={6} md={3}>
                    <h6 className="restaurant-item-delivery-time">{i18next.t("DELIVERY")} {this.props.deliveryTime} {i18next.t("MIN")}</h6>
                </Col>
                <Col xs={6} md={3}>
                    {false &&
                    <h2 className="restaurant-item-min-order">{this.props.minOrder} $</h2>
                    }
                    <h5 className="restaurant-item-delivery-time">{i18next.t("OPENING_HOURS")} {this.getHours()[0]}-{this.getHours()[1]}</h5>
                </Col>
            </Row>
        )
    }

    getHours() {
        let open = this.props.openHour ? this.props.openHour : "8:00";
        let close = this.props.closeHour ? this.props.closeHour : "20:00";
        let array = [];
        array.push(open);
        array.push(close);
        return array;
    }

}