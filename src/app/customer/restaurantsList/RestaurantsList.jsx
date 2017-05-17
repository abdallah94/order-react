/**
 * Created by Abdallah on 5/17/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {RestaurantItemContainer} from '../';

/*Modules*/
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export class RestaurantsList extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    {this.props.restaurants && this.props.restaurants.map((restaurant, index) => (
                        <RestaurantItemContainer {...restaurant}/>
                    ))
                    }
                    <h1>RestaurantsList</h1>
                </Row>
            </Grid>

        )

    }

}