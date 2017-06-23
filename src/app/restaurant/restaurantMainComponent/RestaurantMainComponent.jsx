import "./style.css";

/* Components */
import {OrderContainer, RestaurantHeader} from "../../shared";
import {NotificationContainer} from '../';

/*Modules*/
import {Row, Col} from "react-bootstrap";
import React from "react";

export class RestaurantMainComponent extends React.Component {
    render() {
        return (
            <Row className="body-container">
                <Col xs={12}>
                    <RestaurantHeader restaurantID={this.props.restaurantID} imageUrl={this.props.imageUrl}
                                      phoneNum={this.props.phoneNum} name={this.props.restaurantName}
                                      deliveryTime={this.props.deliveryTime} minOrder={this.props.minOrder}
                                      rating={this.props.rating}/>
                </Col>
                <Col xs={12} md={7} className="orders-container">
                    {!!this.props.items && this.props.items.map((item) => (
                        <OrderContainer restaurantID={this.props.restaurantID} key={item.id} {...item}
                                        deliveryTime={this.props.deliveryTime} edit={this.props.edit}
                                        restaurantName={this.props.restaurantName}
                                        deliveryFee={this.props.deliveryFee} minOrder={this.props.minOrder}/>
                    ))}
                </Col>
                <Col xs={12} md={5} className="orders-notifications-container">
                    <NotificationContainer/>
                </Col>
            </Row>

        )

    }

}