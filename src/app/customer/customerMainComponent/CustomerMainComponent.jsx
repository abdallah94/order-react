import "./style.css";
import React, {Component} from "react";
import {Grid, Row} from 'react-bootstrap';

import {SearchContainer} from '../';

class CustomerMainComponent extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <h1>Customer</h1>
                </Row>
                <Row>
                    <SearchContainer/>
                </Row>
            </Grid>
        );
    }
}

export {CustomerMainComponent};
