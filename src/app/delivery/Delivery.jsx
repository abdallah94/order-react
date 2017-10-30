/**
 * Created by Abdallah on 6/20/2017.
 */

/*CSS*/

/* Components */
import {DashboardContainer} from '../shared';
import {Constants} from '../../utils';
import {NotificationContainer} from '../restaurant';

/*Modules*/
import React from 'react';
import {browserHistory} from 'react-router';
import {Row, Col} from 'react-bootstrap';

export class Delivery extends React.Component {

    componentWillMount() {
        if (this.props.role !== Constants.DELIVERY) {
            browserHistory.push("/");
        }
    }

    render() {
        return (
            <div>
                <DashboardContainer/>
                <Row className="body-container no-margins">
                    <Col xs={12} mdOffset={3} md={6}>
                        <NotificationContainer delivery={true}/>
                    </Col>
                </Row>
            </div>

        )

    }

}