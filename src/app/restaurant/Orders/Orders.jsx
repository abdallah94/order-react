/**
 * Created by Abdallah on 7/16/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {Constants, PathConstants} from '../../../utils';
import {DashboardContainer} from '../../shared';
/*Modules*/
import React from 'react';
import {browserHistory} from 'react-router';
import {Col, Button} from 'react-bootstrap';
import i18next from 'i18next';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class Orders extends React.Component {
    selectRowProp = {
        mode: 'radio',
        clickToSelect: true,
        onSelect: this.onRowSelect,
    };

    componentWillMount() {
        if (this.props.role !== Constants.RESTAURANT && this.props.role !== Constants.ADMIN) {
            browserHistory.push("/");
        }
        this.props.getOrders(this.props.restaurantID);
        this.getFullName = this.getFullName.bind(this);
        this.onRowSelect = this.onRowSelect.bind(this);
    }

    getFullName(cell, row) {
        return (
            <div>{row.first_name} {row.last_name}</div>
        )
    }

    getStatus(cell, row) {
        let status = (row.accepted) ? i18next.t("ACCEPTED") : i18next.t("Pending");
        return (
            <div>{status}</div>
        )
    }

    getType(cell, row) {
        let status = (row.delivery) ? i18next.t("DELIVERY") : i18next.t("PICK_UP");
        return (
            <div>{status}</div>
        )
    }

    rowStyle(row, rowIndex) {
        let backgroundColor = row && (row.accepted) ? '#6192e8' : '#ed5f55';
        return {backgroundColor: backgroundColor};
    }

    onRowSelect(row, isSelected, e) {
        browserHistory.push(PathConstants.PATH_APP_ORDER + "/" + row['id']);
    }

    render() {
        let orders = (this.props.orders) ? this.props.orders : [];
        return (
            <div>
                <DashboardContainer/>
                <div className="body-container">
                    <Col xs={12} className="order-details-container">
                        {this.props.orders && Object.keys(this.props.orders) !== 0 &&
                        <div>
                            <Col xs={12}>
                                <BootstrapTable ref="table" height='800' scrollTop={ 'Top' } data={orders} striped hover
                                                condensed
                                                selectRow={ this.selectRowProp } trStyle={this.rowStyle}>
                                    <TableHeaderColumn headerAlign='center' dataField='id' dataAlign='center'
                                                       isKey>{i18next.t("ORDER_ID")}</TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataFormat={this.getFullName}>{i18next.t("CUSTOMER_NAME")}</TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataField='created_at'>{i18next.t("ORDER_TIME")}</TableHeaderColumn>
                                    <TableHeaderColumn dataField='total'>{i18next.t("TOTAL")}</TableHeaderColumn>
                                    <TableHeaderColumn dataFormat={this.getType}>{i18next.t("TYPE")}</TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataFormat={this.getStatus}>{i18next.t("STATUS")}</TableHeaderColumn>
                                </BootstrapTable>
                            </Col>
                        </div>
                        }
                    </Col>
                </div>
            </div>
        )

    }

}