import "./style.css";
import React, {Component} from "react";
import {Grid, Row, Image} from 'react-bootstrap';

/*Components*/
import {Constants} from '../../../utils';
import {SearchContainer} from '../';

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
