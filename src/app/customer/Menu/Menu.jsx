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
import {Row, Col} from 'react-bootstrap';

export class Menu extends React.Component {
    componentWillMount() {
        this.props.fetchItems(this.props.restaurantID);
    }

    render() {
        return (
            <Row className="body-container">
                <Col xs={12}>
                    <RestaurantHeader restaurantID={this.props.restaurantID} imageUrl={this.props.imageUrl}
                                      phoneNum={this.props.phoneNum} name={this.props.restaurantName}
                                      deliveryTime={this.props.deliveryTime} minOrder={this.props.minOrder}
                                      rating={this.props.rating}/>
                </Col>
                <Col xs={12} md={8} className="orders-container">
                    {!!this.props.categories && this.props.categories.map((category) => (
                        <div>
                            <h2 className="category-title">{category.name}</h2>
                            {category.items && category.items.map((item) => (
                                <OrderContainer restaurantID={this.props.restaurantID} key={item.id} {...item}
                                                deliveryTime={this.props.deliveryTime} edit={this.props.edit}
                                                restaurantName={this.props.restaurantName}
                                                deliveryFee={this.props.deliveryFee} minOrder={this.props.minOrder}/>
                            ))}
                        </div>
                    ))}
                    {!!this.props.items && this.props.items.map((item) => (
                        <OrderContainer restaurantID={this.props.restaurantID} key={item.id} {...item}
                                        deliveryTime={this.props.deliveryTime} edit={this.props.edit}
                                        restaurantName={this.props.restaurantName}
                                        deliveryFee={this.props.deliveryFee} minOrder={this.props.minOrder}/>
                    ))}
                </Col>
                <Col xs={12} md={3} mdOffset={1} className="cart-container">
                    <CartContainer checkout={false}/>
                </Col>
            </Row>
        )
    }
}