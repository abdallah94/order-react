import "./style.css";
import React, {Component} from "react";
import {Form, FormGroup, Col, Row} from 'react-bootstrap';
import Select from 'react-select';
import i18next from 'i18next';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    render() {
        return (
            <Row>
                <Form horizontal>
                    <FormGroup>
                        <Col xs={5}>
                            <Select value={this.state.value}
                                    multi={false}
                                    simpleValue={true}
                                    disabled={false}
                                    onChange={this.handleSelectChange.bind(this)}
                                    options={this.props.options}>

                            </Select>
                        </Col>
                    </FormGroup>
                </Form>
            </Row>
        );
    }

    handleSelectChange(value) {
        console.log(value);
        if(!value){
            value=0;
        }
        this.setState({value:value});
    }

}

export {Search};
