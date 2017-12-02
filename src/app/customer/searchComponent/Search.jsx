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
            type: 0
        };
        this.findRestaurant = this.findRestaurant.bind(this);
        this.findAllRestaurants = this.findAllRestaurants.bind(this);
        this.ChooseArea = this.ChooseArea.bind(this);
    }

    componentWillMount() {
        this.props.getRestaurants();
        if (this.props.area) {
            this.setState({
                value: this.props.area
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (typeof nextProps.area !== "undefined") {
            this.setState({
                value: nextProps.area
            })
        }
    }

    render() {
        let isDisabled = !this.props.area;
        return (
            <div className="search-wrapper">
                <Image responsive src={Constants.MAIN_PIC_1} className="image-food"/>
                <Image responsive src={Constants.MAIN_PIC_2} className="image-food"/>
                <div className="main-images-container">

                </div>
                <Row className="search-component">
                    <Row className="welcome-to-foodyexpress-container">
                        <h1 className="welcome-to-foodyexpress">{i18next.t("MAIN_PAGE_TEXT1")}</h1>
                        <h1 className="welcome-to-foodyexpress">{i18next.t("MAIN_PAGE_TEXT2")}</h1>
                    </Row>
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
                                <Select className="type-search" value={this.state.type}
                                        multi={false} simpleValue={true}
                                        disabled={false} onChange={this.handleTypeChange.bind(this)}
                                        options={this.props.types}>
                                </Select>
                                <Button disabled={isDisabled} className="button-find" onClick={() => {
                                    this.findAllRestaurants()
                                }}>{i18next.t("FIND")}</Button>
                            </Col>
                        </Row>
                    </Form>
                </Row>
            </div>
        )
            ;
    }

    handleTypeChange(value) {
        if (!value) {
            value = 0;
        }
        this.setState({type: value}, () => {
            if (value >= 0 && value < this.props.options.length) {
                this.props.chooseCuisine(this.state.type);
            }
        });
    }

    handleSelectChange(value) {
        if (!value) {
            value = 0;
        }
        this.setState({value: value}, () => {
            if (value >= 0 && value < this.props.options.length) {
                this.ChooseArea();
            }
        });
    }

    findRestaurant() {
        let val = !!this.state.value ? this.props.options[this.state.value].label : "";
        this.props.findRestaurant(val);
    }

    findAllRestaurants() {
        let type = this.state.type ? this.props.types[this.state.type].label : "";
        this.props.findRestaurant("", type);
    }

    ChooseArea() {
        this.props.chooseArea(this.state.value);
    }

}

export {Search};
