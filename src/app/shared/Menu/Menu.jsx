/**
 * Created by Abdallah on 6/6/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {OrderContainer} from '../';

/*Modules*/
import React from 'react';

export class Menu extends React.Component {
    render() {
        return (
            !!this.props.items && this.props.items.map((item) => {
                <OrderContainer {...item}/>
            })
        )
    }
}