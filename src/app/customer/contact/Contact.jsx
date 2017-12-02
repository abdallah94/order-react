/**
 * Created by Abdallah on 11/19/2017.
 */

/*CSS*/
import './style.css'

/* Components */

/*Modules*/
import React from 'react';
import i18next from 'i18next';

export class Contact extends React.Component {
    render() {
        return (
            <div>
                <h3 className="about-us-title">{i18next.t("CONTACT")}</h3>
                <p className="about-us-string">{i18next.t("CONTACT_US_MESSAGE")}</p>
                <a><h4 style={{"margin-top": "25px"}}>foodyExpress.ps@gmail.com</h4></a>
            </div>

        )

    }

}