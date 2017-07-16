/**
 * Created by Abdallah on 7/16/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {Constants} from '../../../utils';
/*Modules*/
import React from 'react';
import {browserHistory} from 'react-router';

export class Order extends React.Component {
    componentWillMount() {
        if (this.props.role !== Constants.RESTAURANT && this.props.role !== Constants.ADMIN) {
            browserHistory.push("/");
        }
        this.props.getOrder(this.props.orderID);
    }

    render() {
        return (
            <h1>Order</h1>

        )

    }

}