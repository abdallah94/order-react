import "./style.css";
/* Components */
/* Modules */
import React, {Component} from "react";
import {Button, Form, FormGroup, ControlLabel, FormControl, Grid, Row, Col} from "react-bootstrap";
import i18next from "i18next";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "restaurant@gmail.com",
            password: "res",
        };
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    setEmail(email) {
        this.setState({
            email: email
        });
    }

    setPassword(password) {
        this.setState({
            password: password
        });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col mdOffset={4} md={4} lgOffset={4} lg={4} smOffset={4} sm={4} xsOffset={3} xs={6}>
                        <Form>
                            <FormGroup controlId="userNameGroup">
                                <ControlLabel> {i18next.t("EMAIL")}</ControlLabel>
                                <FormControl onChange={(e) => {
                                    this.setEmail(e.target.value)
                                }} placeholder={i18next.t("EMAIL")} type="email"
                                             defaultValue="restaurant@gmail.com"/>
                            </FormGroup>
                            <FormGroup controlId="passwordGroup">
                                <ControlLabel> {i18next.t("PASSWORD")}</ControlLabel>
                                <FormControl placeholder={i18next.t("PASSWORD")} type="password" defaultValue="res"
                                             onChange={(e) => {
                                                 this.setPassword(e.target.value)
                                             }}/>
                            </FormGroup>
                            <FormGroup>
                                <Col mdOffset={4} md={4} lgOffset={4} lg={4} smOffset={4} sm={4} xsOffset={3}
                                     xs={6}>
                                    <Button
                                        onClick={() => this.props.login(this.state.email, this.state.password)}>{i18next.t("LOGIN")}</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        )
    }

    // <div>
    //     <Button onClick={this.login}>Login</Button>
    // </div>
}

export default Login;
