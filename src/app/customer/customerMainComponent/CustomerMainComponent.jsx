import "./style.css";
import React, {Component} from "react";
import {Grid} from "react-bootstrap";
/*Components*/
import {SearchContainer} from "../";

class CustomerMainComponent extends Component {
    render() {
        return (
            <Grid fluid>
                <SearchContainer/>
            </Grid>
        );
    }
}

export {CustomerMainComponent};
