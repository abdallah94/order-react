/**
 * Created by Abdallah on 6/18/2017.
 */

/*CSS*/

/* Components */
import {PathConstants} from '../../../utils';

/*Modules*/
import React from 'react';
import {Modal,Button} from 'react-bootstrap'
import i18next from 'i18next';
import {browserHistory} from 'react-router';

export class OrderConfirm extends React.Component {
    navigateToMain(){
        this.props.resetCart();
        browserHistory.push(PathConstants.PATH_APP_CUSTOMER);
    }
    render() {
        return (
            <div className="static-modal">
                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header>
                        <Modal.Title>{i18next.t("ORDER_SUBMITTED")}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {i18next.t("SUCCESSFUL_ORDER_SUBMIT_MESSAGE_1") + this.props.restaurantName +
                        i18next.t("SUCCESSFUL_ORDER_SUBMIT_MESSAGE_2") + this.props.deliveryTime + " "+i18next.t("MINUTES")}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.navigateToMain.bind(this)} className="center-block" bsStyle="primary">{i18next.t("OK")}</Button>
                    </Modal.Footer>

                </Modal>
            </div>

        )

    }

}