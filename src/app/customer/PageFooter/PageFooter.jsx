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

export class PageFooter extends React.Component {
    render() {
        return (
            <div className="page-footer-container">
                <Row className="news-letter-container">
                    <NewsLetterContainer/>
                </Row>
                <div className="about-us-container">
                    <h3>{i18next.t("ABOUT_US")}</h3>
                    <p className="about-us-string">{i18next.t("ABOUT_US_MESSAGE")}</p>
                </div>
                <div className="follow-us-container">
                    <h3 className="follow-us">{i18next.t("FOLLOW_US")}</h3>
                    <a href="https://www.facebook.com/FoodyExpress-279235135894818" className="facebook-icon"></a>
                </div>
            </div>
        )
    }
}