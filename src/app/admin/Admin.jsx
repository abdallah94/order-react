/**
 * Created by Abdallah on 6/20/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {DashboardContainer} from '../shared';
import {Constants} from '../../utils';
import {RestaurantsListContainer} from '../customer';

/*Modules*/
import React from 'react';
import {browserHistory} from 'react-router';

export class Admin extends React.Component {

    componentWillMount() {
        if (this.props.role !== Constants.ADMIN) {
            browserHistory.push("/");
        }
    }

    render() {
        return (
            <div>
                <DashboardContainer/>
                <div className="body-container no-margins">
                    <RestaurantsListContainer admin={true}/>
                </div>
            </div>
        )
    }
}