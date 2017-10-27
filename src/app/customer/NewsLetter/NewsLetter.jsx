/**
 * Created by Abdallah on 10/22/2017.
 */

/*CSS*/
import './style.css'

/* Components */

/*Modules*/
import React from 'react';
import i18next from 'i18next';
import {Col, Row, Form, FormGroup, FormControl, ControlLabel, Button, Radio, HelpBlock} from 'react-bootstrap';
import alertify from 'alertify.js';

export class NewsLetter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribed: false,
            email: ""
        }
        this.subscribe = this.subscribe.bind(this);
    }

    subscribe() {
        this.props.subscribe(this.state.email);
        this.setState({
            subscribed: true
        });
    }

    render() {
        return (
            <div>
                {!this.state.subscribed &&
                <h1 className="text-align-center text-color-white margin-bottom-2rem">{i18next.t("SUBSCRIBE_TO_OUR_NEWS_LETTER")}</h1>
                }
                {!this.state.subscribed &&
                <Form horizontal className="center-element">
                    <Col md={3} sm={4} xs={6} smOffset={3} xsOffset={2} mdOffset={4} className="subscribe-email">
                        <FormGroup controlId="emailGroup">
                            <FormControl onChange={(e) => {
                                this.setState({email: e.target.value});
                            }} placeholder={i18next.t("EMAIL")} type="email" value={this.state.email}/>
                            <FormControl.Feedback />
                        </FormGroup>
                    </Col>
                    <Col md={2} sm={3} xs={4}>
                        <Button className="btn-primary" onClick={() => {
                            this.subscribe()
                        }}>{i18next.t("SUBSCRIBE_NOW")}</Button>
                    </Col>
                </Form>
                }
                {this.state.subscribed &&
                <h3 className="text-align-center text-color-white margin-bottom-2rem">{i18next.t("SUBSCRIBED_MESSAGE")}</h3>
                }
            </div>

        )

    }

}