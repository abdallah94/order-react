/**
 * Created by Abdallah on 10/4/2017.
 */

/*CSS*/
import './style.css';

/* Components */
import {NewsLetterContainer} from '../NewsLetter/NewsLetterContainer';
/*Modules*/
import React from 'react';
import {Row} from 'react-bootstrap';
import i18next from 'i18next';
import {PathConstants} from "../../../utils/RouteConstants";

export class PageFooter extends React.Component {
    render() {
        return (
            <div className="page-footer-container">
                <Row className="news-letter-container">
                    <NewsLetterContainer/>
                </Row>
                <div className="about-us-container">
                    <a href={PathConstants.PATH_APP_ABOUT_US}><h3
                        style={{"color": "white"}}>{i18next.t("ABOUT_US")}</h3></a>
                    <a href={PathConstants.PATH_APP_CONTACT}><h3 style={{"color": "white"}}>{i18next.t("CONTACT")}</h3>
                    </a>
                    <a href={PathConstants.PATH_APP_TERMS_AND_CONDITIONS}><h3
                        style={{"color": "white"}}>{i18next.t("TERMS_AND_CONDITIONS")}</h3></a>
                    <a href={PathConstants.PATH_APP_ADD_RESTAURANT}><h3
                        style={{"color": "white"}}>{i18next.t("ADD_YOUR_RESTAURANT")}</h3></a>
                </div>
                <div className="follow-us-container">
                    <h3 className="follow-us">{i18next.t("FOLLOW_US")}</h3>
                    <a href="https://www.facebook.com/FoodyExpress-279235135894818" className="facebook-icon"></a>
                </div>
            </div>
        )
    }
}