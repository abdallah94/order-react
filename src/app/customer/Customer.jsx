/**
 * Created by Abdallah on 5/18/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {DashboardContainer} from '../shared';
import {PageFooter} from "./PageFooter/PageFooter";
import {ChooseCheckoutModalContainer} from './chooseCheckout/ChooseCheckoutModalContainer';

/*Modules*/
import React from 'react';

export class Customer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.total === 0 && nextProps.total) {
            this.open();
        }
    }


    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({
            showModal: true,
        });
    }

    render() {
        return (
            <div style={{"height": "100%"}}>
                <DashboardContainer/>
                <div className="customer-container">
                    {this.props.children}
                </div>
                <ChooseCheckoutModalContainer show={this.state.showModal} close={this.close}/>
                <PageFooter/>
            </div>

        )

    }

}