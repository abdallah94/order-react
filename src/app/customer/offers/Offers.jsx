import "./style.css";
/* Components */
/*Modules*/
import React from "react";
import {Col, Carousel, Image} from "react-bootstrap";

export class Offers extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.getInitialState = this.getInitialState.bind(this);
        this.state = this.getInitialState();
    }

    render() {
        return (
            <Col xs={10} xsOffset={1}>
                <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} interval={1} slide wrap>
                    {this.props.offers.map((offer, i) => (
                        <Carousel.Item key={i}>
                            <Image responsive height={200} src={offer.image} className="offer-image"/>
                            <Carousel.Caption>
                                <h3>{offer.restaurant}</h3>
                                <p>{offer.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>

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