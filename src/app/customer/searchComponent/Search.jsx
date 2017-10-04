import "./style.css";

import React, {Component} from "react";
import {Form, Col, Row, Button, Image} from "react-bootstrap";
import Select from "react-select";
import i18next from "i18next";
import {browserHistory} from "react-router";

import {Constants} from "../../../utils";
import {PathConstants} from '../../../utils';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
        this.findRestaurant = this.findRestaurant.bind(this);
        this.findAllRestaurants = this.findAllRestaurants.bind(this);
        this.navigateToRestaurant = this.navigateToRestaurant.bind(this);
    }

    componentWillMount() {
        this.props.getRestaurants();
    }

    render() {
        return (
            <div className="search-wrapper">
                <Image responsive src={Constants.MAIN_PIC_1} className="image-food"/>
                <Image responsive src={Constants.MAIN_PIC_2} className="image-food"/>
                <Row className="search-component">
                    <Form horizontal>
                        <Row className="row-eq-height">
                            <Col md={5} mdOffset={2} className="no-padding" xs={4} xsOffset={2}>
                                <Select className="select-search" value={this.state.value}
                                        multi={false} simpleValue={true}
                                        disabled={false} onChange={this.handleSelectChange.bind(this)}
                                        options={this.props.options}>
                                </Select>
                            </Col>
                            <Col md={4} xs={5} className="no-padding no-border-radius no-border">
                                <Button className="button-find" onClick={() => {
                                    this.findRestaurant()
                                }}>{i18next.t("FIND")}</Button>
                                <Button className="button-show-all" onClick={() => {
                                    this.findAllRestaurants()
                                }}>{i18next.t("SHOW_ALL")}</Button>
                            </Col>
                        </Row>
                    </Form>
                </Row>
            </div>
        )
            ;
    }

    handleSelectChange(value) {
        if (!value) {
            value = 0;
        }
        this.setState({value: value}, () => {
            if (value > 0 && value < this.props.options.length) {
                this.navigateToRestaurant();
            }
        });
    }

    findRestaurant() {
        let val = !!this.state.value ? this.props.options[this.state.value].label : "";
        this.props.findRestaurant(val);
    }

    findAllRestaurants() {
        this.props.findRestaurant("");
    }

    navigateToRestaurant() {
        browserHistory.push(PathConstants.PATH_APP_CUSTOMER_RESTAURANTS + "/" + this.state.value);
    }

}

export {Search};
