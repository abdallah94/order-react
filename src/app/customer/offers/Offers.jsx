import "./style.css";
/* Components */
/*Modules*/
import React from "react";
import {Col, Carousel, Image} from "react-bootstrap";
import Constants from "../../../utils/Constants";

export class Offers extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.getInitialState = this.getInitialState.bind(this);
        this.state = this.getInitialState();
    }

    render() {
        return (
            <div>
                <Col xs={12}>
                    <Col xs={6} sm={4} md={2}>
                        <a href="http://foodyexpress.net:5000/customer"><Image src={Constants.ZARB_LOGO}
                                                                               className="logo-img"/></a>
                    </Col>
                    <Col xs={6} sm={4} md={2}>
                        <a href="http://foodyexpress.net:5000/customer/restaurants/1"><Image
                            src={Constants.IT_WAITS_LOGO}
                            className="logo-img"/></a>
                    </Col>
                    <Col xs={6} sm={4} md={2}>
                        <a href="http://foodyexpress.net:5000/customer/restaurants/2"> <Image
                            src={Constants.BURGER_FACTORY_LOGO} className="logo-img"/></a>
                    </Col>
                    <Col xs={6} sm={4} md={2}>
                        <a href="http://foodyexpress.net:5000/customer/restaurants/3"> <Image
                            src={Constants.HUT_POTATO_LOGO}
                            className="logo-img"/></a>
                    </Col>
                    <Col xs={6} sm={4} md={2}>
                        <a href="http://foodyexpress.net:5000/customer"><Image src={Constants.DANDARA_LOGO}
                                                                               className="logo-img"/></a>
                    </Col>
                    <Col xs={6} sm={4} md={2}>
                        <a href="http://foodyexpress.net:5000/customer"><Image src={Constants.CINABON_LOGO}
                                                                               className="logo-img"/></a>
                    </Col>
                </Col>
                <Col md={2} xs={12}>
                    <a href="http://foodyexpress.net:5000/customer"><Image src={this.props.offers[1].image}
                                                                           className="small-offer-img"/></a>
                    <a href="http://foodyexpress.net:5000/customer"><Image src={this.props.offers[3].image}
                                                                           className="small-offer-img"/></a>
                </Col>
                <Col xs={12} md={8}>
                    <Carousel direction={this.state.direction}
                              onSelect={this.handleSelect} interval={Constants.OFFERS_CYCLING_PERIOD} slide wrap>
                        {this.props.offers.map((offer, i) => (
                            <Carousel.Item key={i}>
                                <a href="http://foodyexpress.net:5000/customer"><Image responsive src={offer.image}
                                                                                       className="offer-image"/></a>
                                <Carousel.Caption>
                                    <h3>{offer.restaurant}</h3>
                                    <p>{offer.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col md={2} xs={12} className="second-offers-container">
                    <a href="http://foodyexpress.net:5000/customer"><Image src={this.props.offers[0].image}
                                                                           className="small-offer-img"/></a>
                    <a href="http://foodyexpress.net:5000/customer"><Image src={this.props.offers[2].image}
                                                                           className="small-offer-img"/></a>
                </Col>
            </div>

        )

    }

    getInitialState() {
        return {
            index: 0,
            direction: 'prev'
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

}