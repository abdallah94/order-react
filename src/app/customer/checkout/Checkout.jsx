/**
 * Created by Abdallah on 6/17/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {CartContainer} from '../';

/*Modules*/
import React from 'react';

export class Checkout extends React.Component {
    render() {
        return (
            <div>
                <h1>Checkout</h1>
                <CartContainer/>
            </div>
        )

    }

}