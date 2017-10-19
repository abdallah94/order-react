/**
 * Created by Abdallah on 10/19/2017.
 */

/*CSS*/

/* Components */
import {PathConstants} from '../../../utils';
import {RestaurantModalContainer} from '../RestaurantModal/RestaurantModalContainer';
/*Modules*/
import React from 'react';
import {Button, Row} from 'react-bootstrap'
import i18next from 'i18next';

export class AdminMainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            newOrder: true,
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
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
            <div>
                <Row>
                    <div className="center-element padding-bottom-2rem"><Button onClick={()=>{this.open()}}>{i18next.t("ADD_RESTAURANT")}</Button>
                    </div>
                </Row>
                <Row>
                    <a href={PathConstants.PATH_APP_ADMIN_RESTAURANTS}
                       className="center-element padding-bottom-2rem"><Button>{i18next.t("VIEW_RESTAURANTS")}</Button></a>
                </Row>
                <RestaurantModalContainer show={this.state.showModal} close={this.close}/>
            </div>
        )
    }
}