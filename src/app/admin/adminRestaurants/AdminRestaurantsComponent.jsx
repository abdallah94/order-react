/**
 * Created by Abdallah on 10/19/2017.
 */

/*CSS*/

/* Components */
import {RestaurantsListContainer} from '../../customer';

/*Modules*/
import React from 'react';

export class AdminRestaurantsComponent extends React.Component {
    render() {
        return (
            <RestaurantsListContainer admin={true}/>
        )

    }

}