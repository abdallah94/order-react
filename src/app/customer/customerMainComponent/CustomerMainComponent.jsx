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
                <Image reposive src={Constants.FOOD_IMG} className="image-food"/>
                <SearchContainer/>
            </Grid>
        );
    }
}

export {CustomerMainComponent};
