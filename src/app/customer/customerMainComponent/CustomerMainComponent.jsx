import "./style.css";
import React, {Component} from "react";
import {Grid, Row} from "react-bootstrap";
/*Components*/
import {SearchContainer} from "../";
import {OffersContainer} from "../";

class CustomerMainComponent extends Component {
    render() {
        return (
            <Grid fluid className="customer-main-container">
                <Row>
                    <SearchContainer/>
                </Row>
                <Row className="offers-container">
                    <OffersContainer/>
                </Row>
            </Grid>
        );
    }
}

export {CustomerMainComponent};
