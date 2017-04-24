/**
 * Created by Abdallah on 4/25/2017.
 */
import i18next from "i18next";
import I18nStrings from './Strings';

//initialize i18 with the string resources
export function initializeI18() {
    i18next.init({
        lng: 'en',
        resources: I18nStrings
    }, (err) => {
        // initialized and ready to go!
        if (err) {
            console.log("I18n error", err);
        }
    });

}