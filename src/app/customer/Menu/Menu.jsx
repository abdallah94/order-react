/**
 * Created by Abdallah on 6/6/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {OrderContainer} from '../../shared';
import {CartContainer} from '../';
import {RestaurantHeader} from '../../shared';

/*Modules*/
import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';

export class Menu extends React.Component {
    componentWillMount() {
        this.props.fetchItems(this.props.restaurantID);
    }

    render() {
        let deliveryTime = 60;
        let deliveryFee = 0;
        if (this.props.restaurantDeliveries && this.props.restaurantDeliveries.length) {
            this.props.restaurantDeliveries.map((del) => {
                console.log(del);
                if (del.area === this.props.area) {
                    deliveryTime = del.time;
                    deliveryFee = del.price;
                }
            })
        }
        return (
            <Row className="body-container">
                <Col xs={12}>
                    <RestaurantHeader restaurantID={this.props.restaurantID} imageUrl={this.props.imageUrl}
                                      phoneNum={this.props.phoneNum} name={this.props.restaurantName}
                                      deliveryTime={deliveryTime} minOrder={this.props.minOrder}
                                      rating={this.props.rating}/>
                </Col>
                <Col xs={12} md={8} className="orders-container">
                    {!!this.props.categories && this.props.categories.map((category, i) => (
                        <div key={i}>
                            <Panel className="category-panel">
                                <Panel.Title toggle>
                                    <h1 className="category-title">{category.name}</h1>
                                </Panel.Title>
                                <Panel.Collapse>
                                    <Panel.Body>
                                        {category.items && category.items.map((item) => (
                                            <OrderContainer restaurantID={this.props.restaurantID}
                                                            key={item.id} {...item}
                                                            deliveryTime={deliveryTime} edit={this.props.edit}
                                                            restaurantName={this.props.restaurantName}
                                                            deliveryFee={deliveryFee} minOrder={this.props.minOrder}/>
                                        ))}
                                    </Panel.Body>
                                </Panel.Collapse>
                            </Panel>
                        </div>
                    ))}
                    {!!this.props.items && this.props.items.map((item) => (
                        <OrderContainer restaurantID={this.props.restaurantID} key={item.id} {...item}
                                        deliveryTime={deliveryTime} edit={this.props.edit}
                                        restaurantName={this.props.restaurantName}
                                        deliveryFee={deliveryFee} minOrder={this.props.minOrder}/>
                    ))}
                </Col>
                <Col xs={12} md={3} mdOffset={1} className="cart-container">
                    <CartContainer checkout={false}/>
                </Col>
            </Row>
        )
    }
}