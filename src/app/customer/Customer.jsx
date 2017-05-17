/**
 * Created by Abdallah on 5/18/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {DashboardContainer} from '../shared';
/*Modules*/
import React from 'react';

export class Customer extends React.Component {
    render() {
        return (
            <div>
                <DashboardContainer/>
                <div className="customer-container">
                    {this.props.children}
                </div>
            </div>

        )

    }

}