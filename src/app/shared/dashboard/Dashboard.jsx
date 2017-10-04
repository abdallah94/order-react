/**
 * Created by Abdallah on 4/24/2017.
 */
import "./style.css";

import {CartContainer} from '../../customer';
import {Constants, PathConstants} from '../../../utils';

import React, {Component} from "react";
import {Navbar, Nav, NavItem, OverlayTrigger, Popover, Image} from 'react-bootstrap';
import {Link} from 'react-router';
import i18next from "i18next";
import {browserHistory} from 'react-router';

class Dashboard extends Component {
    render() {
        const cartPopover = (
            <Popover id="popover-cart" className="cart-popover-container" positionRight={450}>
                <CartContainer checkout={false}/>
            </Popover>);
        return (
            <Navbar inverse collapseOnSelect fixedTop fluid className="dashboard-padding">
                <Navbar.Header>
                    <Navbar.Brand>{/*TODO:ADD LOGO*/}
                        <Link to="/"><h2 className="logo-title">Foody Express</h2></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight className="dashboard-items-container">
                        {!this.props.loggedIn &&
                        <NavItem eventKey={1}>
                            <h5 className="dashboard-text-color dashboard-text" onClick={() => {
                                browserHistory.push(PathConstants.PATH_LOGIN)
                            }}>{i18next.t("LOGIN")}</h5>
                        </NavItem>
                        }
                        {this.props.loggedIn &&
                        <NavItem eventKey={2}>
                            <h5 className="dashboard-text-color dashboard-text" onClick={() => {
                                this.props.logout();
                            }}>{i18next.t("LOGOUT")}</h5>
                        </NavItem>
                        }
                        <NavItem eventKey={3}><h5 className="dashboard-text-color dashboard-text" onClick={() => {
                            this.props.changeLanguage()
                        }}>{i18next.t("LANGUAGE")}</h5></NavItem>
                        {this.props.role !== Constants.ADMIN && this.props.role !== Constants.RESTAURANT &&
                        < OverlayTrigger trigger="click" placement="bottom"
                                         overlay={cartPopover}>
                            <NavItem eventKey={5}><Image className="dashboard-cart-image"
                                                         src={Constants.CART_IMG}/></NavItem>
                        </OverlayTrigger>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    getPopover(id) {
        return (
            <Popover id="popover-cart" className="cart-popover-container">
                <CartContainer/>
            </Popover>
        )
    }
}

export default Dashboard;
