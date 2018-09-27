/**
 * Created by Abdallah on 11/19/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {DashboardContainer} from '../../shared';
import {PageFooter} from "../../customer/PageFooter/PageFooter";
import {PathConstants} from '../../../utils';

/*Modules*/
import React from 'react';
import Rating from 'react-rating';
import i18next from 'i18next';
import {FormGroup, ControlLabel, Button, FormControl} from 'react-bootstrap';
import alertify from 'alertify.js';
import {browserHistory} from 'react-router';

export class OrderRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantRating: 0,
            deliveryRating: 0,
            foodyExpressRating: 0,
            remarks: "",
            submitted: false
        };
        this.submitRating = this.submitRating.bind(this);
    }

    componentWillMount() {
        this.props.checkSubmitted(this.props.orderID);
    }

    componentWilReceiveProps(nextProps) {
        if (nextProps.submitted) {
            this.setState({submitted: nextProps.submitted});
        }
    }

    submitRating() {
        let data = {
            "restaurant_rating": this.state.restaurantRating,
            "delivery_rating": this.state.deliveryRating,
            "foody_express_rating": this.state.foodyExpressRating,
            "remarks": this.state.remarks,
            "order_id": this.props.orderID
        };
        this.props.submitRating(data, () => {
            this.setState({submitted: true});
        });
    }

    render() {
        return (
            <div>
                <DashboardContainer/>
                <div className="customer-container">
                    <div className="content-container">
                        {this.state.submitted &&
                        <h3>{i18next.t("RATING_MESSAGE")}</h3>

                        }
                        {!this.state.submitted &&
                        <div>
                            <h3 className="about-us-title">{i18next.t("RATING")}</h3>
                            < div className="rating-item-container">
                                <h5>{i18next.t("RESTAURANT_RATING")}</h5>
                                <Rating initialRate={this.state.restaurantRating} empty="fa fa-star-o fa-2x medium"
                                        full="fa fa-star fa-2x medium" onChange={(rate) => {
                                    this.setState({restaurantRating: rate})
                                }}/>
                            </div>
                            <div className="rating-item-container">
                                <h5>{i18next.t("DELIVERY_RATING")}</h5>
                                <Rating initialRate={this.state.deliveryRating} empty="fa fa-star-o fa-2x medium"
                                        full="fa fa-star fa-2x medium" onChange={(rate) => {
                                    this.setState({deliveryRating: rate})
                                }}/>
                            </div>
                            <div className="rating-item-container">
                                <h5>{i18next.t("FOODY_EXPRESS_RATING")}</h5>
                                <Rating initialRate={this.state.foodyExpressRating} empty="fa fa-star-o fa-2x medium"
                                        full="fa fa-star fa-2x medium" onChange={(rate) => {
                                    this.setState({foodyExpressRating: rate})
                                }}/>
                            </div>
                            <FormGroup controlId="ramerksGroup">
                                <ControlLabel>{i18next.t("REMARKS")}</ControlLabel>
                                <FormControl componentClass="textarea" onChange={(e) => {    
                                    this.setState({remarks: e.target.value});
                                }} placeholder={i18next.t("REMARKS")} type="text" value={this.state.remarks}/>
                            </FormGroup>
                            <Button className="center-block submit-button"
                                    onClick={this.submitRating}>{i18next.t("SUBMIT")}</Button>
                        </div>
                        }
                    </div>
                </div>
                <PageFooter/>
            </div>

        )

    }

}