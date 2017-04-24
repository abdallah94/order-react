/**
 * Created by Abdallah on 4/24/2017.
 */
import "./style.css";

import React, {Component} from "react";
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import {Link} from 'react-router';

import i18next from "i18next";

class Dashboard extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop fluid>
                <Navbar.Header>
                    <Navbar.Brand>{/*TODO:ADD LOGO*/}
                        <Link to="/"><h5>ORDERS</h5></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1}><h5>{i18next.t("LOGIN")}</h5></NavItem>
                        <NavItem eventKey={2} ><h5 onClick={()=>{this.props.changeLanguage()}}>{i18next.t("LANGUAGE")}</h5></NavItem>
                        <NavItem eventKey={3}><h5>0595453476</h5></NavItem>
                        <NavItem eventKey={4}><h5>CART</h5></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Dashboard;
