import "./style.css";
import React, {Component} from "react";
import {Form, FormGroup, Col, Row, Button,Image} from 'react-bootstrap';
import Select from 'react-select';
import i18next from 'i18next';

import {Constants} from '../../../utils';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    render() {
        return (
            <div className="search-wrapper">
                <Image reposive src={Constants.FOOD_IMG} className="image-food"/>
                <Row className="search-component">
                    <Form horizontal>
                        <Row className="row-eq-height">
                            <Col xs={3} xsOffset={4} className="no-padding">
                                <Select className="select-search" value={this.state.value}
                                        multi={false}
                                        simpleValue={true}
                                        disabled={false}
                                        onChange={this.handleSelectChange.bind(this)}
                                        options={this.props.options}>
                                </Select>
                            </Col>
                            <Col xs={2} className="no-padding no-border-radius no-border">
                                <Button className="button-find">{i18next.t("FIND")}</Button>
                                <Button className="button-show-all">{i18next.t("SHOW_ALL")}</Button>
                            </Col>
                        </Row>
                    </Form>
                </Row>
            </div>
        );
    }

    handleSelectChange(value) {
        console.log(value);
        if (!value) {
            value = 0;
        }
        this.setState({value: value});
    }

}

export {Search};
