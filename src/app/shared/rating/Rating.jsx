/**
 * Created by Abdallah on 11/19/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {DashboardContainer} from '../../shared';
import {PageFooter} from "../../customer/PageFooter/PageFooter";

/*Modules*/
import React from 'react';
import Rating from 'react-rating';

export class Rating extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentWilReceiveProps(nextProps) {

    }

    render() {
        return (
            <div>
                <DashboardContainer/>
                <div className="customer-container">
                    <div className="content-container">
                        <Rating readonly initialRate={this.props.rating} empty="fa fa-star-o fa-2x medium"
                                full="fa fa-star fa-2x medium"/>
                        <h6 className="restaurant-item-delivery-time">{i18next.t("DELIVERY")} {this.props.deliveryTime} {i18next.t("MIN")}</h6>
                    </div>
                </div>
                <PageFooter/>
            </div>

        )

    }

}