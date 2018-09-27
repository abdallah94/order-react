/**
 * Created by Abdallah on 7/16/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {Constants} from '../../../utils';
import {DashboardContainer} from '../../shared';
/*Modules*/
import React from 'react';
import {browserHistory} from 'react-router';
import {Col, Button} from 'react-bootstrap';
import i18next from 'i18next';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class OrderDetails extends React.Component {
    componentWillMount() {
        if (this.props.role !== Constants.RESTAURANT && this.props.role !== Constants.ADMIN) {
            browserHistory.push("/");
        }
        this.props.getOrder(this.props.orderID);
    }

    render() {
        let items = (this.props.order) ? this.props.order.items : [];
        return (
            <div>
                <DashboardContainer/>
                <div className="body-container">
                    <Col xs={12} className="order-details-container">
                        <h3>{i18next.t("ORDER_ID")}: {this.props.orderID}</h3>
                        {this.props.order &&
                        <div>
                            <Col xs={6}>
                                <h5>{i18next.t("NAME")}: {this.props.order.first_name} {this.props.order.last_name}</h5>
                            </Col>
                            <Col xs={6}>
                                <h5>{i18next.t("PHONE_NUMBER")}: {this.props.order.phone}</h5>
                            </Col>
                            <Col xs={12}>
                                <h5>{i18next.t("ADDRESS")}:{this.props.order.location}</h5>
                            </Col>
                            <Col xs={6}>
                                <h5>{i18next.t("TOTAL")}:{this.props.order.total}</h5>
                            </Col>
                            <Col xs={6}>
                                <h5>{i18next.t("ORDER_TIME")}:{this.props.order.created_at}</h5>
                            </Col>
                            <Col xs={12}>
                                {this.props.order.remarks &&
                                <Col xs={6}>
                                    <p className="text-align-left inline-block">{this.props.order.remarks}</p>
                                </Col>}
                                <h5 className="text-align-center inline-block">{this.props.order.delivery ? i18next.t("DELIVERY") : i18next.t("PICK_UP")}</h5>
                            </Col>
                            < Col xs={12}>
                                <BootstrapTable data={items} striped hover condensed>
                                    <TableHeaderColumn dataField='item_id' isKey>Item ID</TableHeaderColumn>
                                    <TableHeaderColumn dataField='item_name'>Item Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
                                    <TableHeaderColumn dataField='size'>size</TableHeaderColumn>
                                    <TableHeaderColumn dataField='extras'>extras</TableHeaderColumn>
                                    <TableHeaderColumn dataField='notes'>notes</TableHeaderColumn>
                                    <TableHeaderColumn dataField='number'>number</TableHeaderColumn>
                                </BootstrapTable>
                            </Col>
                            {!this.props.order.accepted &&
                            <Col xs={12} className="text-align-center">
                                <Button onClick={() => this.props.acceptOrder(this.props.order.id)}
                                        className="btn-primary center-block">{i18next.t("Accept")}</Button>
                            </Col>
                            }
                        </div>
                        }
                    </Col>
                </div>
            </div>
        )

    }

}