/**
 * Created by Abdallah on 5/18/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {Constants} from '../../../utils';

/*Modules*/
import React from 'react';
import {Image, Row, Col} from 'react-bootstrap';

export class MenuItem extends React.Component {
    render() {
        return (//TODO:continue UI
            <Row>
                <Col xs={12} sm={4} md={3}>
                    <Image/>
                </Col>
            </Row>

        )

    }

}

MenuItem.defaultProps = {
    id: -1,
    imageUrl: Constants.FOOD_IMG,
    name: "Delicious meal",
    description: "This is a long description of the meal mentioned above, enjoy!",
    price: "10"
};