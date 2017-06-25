/**
 * Created by Abdallah on 6/20/2017.
 */

/*CSS*/

/* Components */
import {DashboardContainer} from '../shared';
import {Constants} from '../../utils';

/*Modules*/
import React from 'react';
import {browserHistory} from 'react-router';

export class Restaurant extends React.Component {

    componentWillMount() {
        if (this.props.role !== Constants.RESTAURANT) {
            browserHistory.push("/");
        }
    }

    render() {
        return (
            <div>
                <DashboardContainer/>
                {this.props.children}
            </div>

        )

    }

}