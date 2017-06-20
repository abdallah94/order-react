/**
 * Created by Abdallah on 6/20/2017.
 */

/*CSS*/

/* Components */
import {DashboardContainer} from '../shared';

/*Modules*/
import React from 'react';

export class Restaurant extends React.Component {
    render() {
        return (
            <div>
                <DashboardContainer/>
                {this.props.children}
            </div>

        )

    }

}