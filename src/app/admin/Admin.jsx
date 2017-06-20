/**
 * Created by Abdallah on 6/20/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {DashboardContainer} from '../shared';
/*Modules*/
import React from 'react';

export class Admin extends React.Component {
    render() {
        return (
            <div>
                <DashboardContainer/>
                <h1>Admin</h1>
            </div>
        )
    }
}