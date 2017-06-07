/**
 * Created by Abdallah on 5/17/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {RestaurantItem} from '../';

/*Modules*/
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export class RestaurantsList extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row className="restaurant-list-container">
                    {this.props.restaurants && this.props.restaurants.map((restaurant, index) => (
                        <RestaurantItem {...restaurant}/>
                    ))
                    }
                </Row>
            </Grid>

        )

    }

}