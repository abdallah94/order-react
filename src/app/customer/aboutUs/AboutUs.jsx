/**
 * Created by Abdallah on 11/19/2017.
 */

/*CSS*/
import './style.css'

/* Components */

/*Modules*/
import React from 'react';
import i18next from 'i18next';

export class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <h3 className="about-us-title">{i18next.t("ABOUT_FOODY_EXPRESS")}</h3>
                <p className="about-us-string">{i18next.t("ABOUT_US_MESSAGE")}</p>
            </div>

        )

    }

}