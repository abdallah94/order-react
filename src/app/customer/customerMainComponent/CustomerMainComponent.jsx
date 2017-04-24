/**
 * Created by Abdallah on 4/24/2017.
 */
import "./style.css";

import React, {Component} from "react";
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import {Link} from 'react-router';
import i18next from "i18next";

import {Constants} from '../../../utils';

class CustomerMainComponent extends Component {
    render() {
        return (
           <h1>Customer</h1>
        );
    }
}

export {CustomerMainComponent};
