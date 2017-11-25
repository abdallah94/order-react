/**
 * Created by Abdallah on 11/19/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {DashboardContainer} from '../../shared';
import {PageFooter} from "../PageFooter/PageFooter";

/*Modules*/
import React from 'react';

export class Content extends React.Component {
    render() {
        return (
            <div style={{"height": "100%"}}>
                <DashboardContainer/>
                <div className="customer-container">
                    <div className="content-container">
                    {this.props.children}
                    </div>
                </div>
                <PageFooter/>
            </div>

        )

    }

}