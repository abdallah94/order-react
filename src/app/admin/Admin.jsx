/**
 * Created by Abdallah on 6/20/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {DashboardContainer} from '../shared';
import {Constants} from '../../utils';

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
                <h1>Admin</h1>
            </div>
        )
    }
}