import "./style.css";

/* Components */
import {OrderContainer, RestaurantHeader} from "../../shared";
import {NotificationContainer} from '../';
import {Constants} from '../../../utils';
import {OrderModalContainer} from '../';

/*Modules*/
import {Row, Col, Button} from "react-bootstrap";
import React from "react";
import i18next from 'i18next';

export class RestaurantMainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            newOrder: true,
            itemID: -1,
            name: "",
            description: "",
            price: "",
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.edit = this.edit.bind(this);
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({
            newOrder: true,
            showModal: true,
            itemID: -1,
            name: "",
            description: "",
            price: "",
            image:""
        });
    }

    edit(itemID, name, description, price,image) {
        this.setState({
            newOrder: false,
            showModal: true,
            itemID: itemID,
            name: name,
            description: description,
            price: price,
            image:image
        });
    }


    componentWillMount() {
        if (this.props.role !== Constants.ADMIN && this.props.restaurantID)
            this.props.fetchItems(this.props.restaurantID);
    }

    render() {
        return (
            <Row className="body-container no-margins">
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
                                        restaurantName={this.props.restaurantName} editOrder={this.edit}
                                        deliveryFee={this.props.deliveryFee} minOrder={this.props.minOrder}/>
                    ))}
                    <Button className="text-align-center center-block btn-primary"
                            onClick={this.open}>{i18next.t("NEW_ITEM")}</Button>
                </Col>
                <Col xs={12} md={5}>
                    <NotificationContainer restaurantID={this.props.restaurantID}/>
                </Col>
                <OrderModalContainer restaurantID={this.props.restaurantID} show={this.state.showModal}
                                     close={this.close} itemID={this.state.itemID} name={this.state.name}
                                     newOrder={this.state.newOrder} description={this.state.description}
                                     price={this.state.price} image={this.state.image}/>
            </Row>

        )

    }

}