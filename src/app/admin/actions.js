/**
 * Created by Abdallah on 4/24/2017.
 */
import {APIConstants} from '../../utils';
import alertify from 'alertify.js';
import i18next from 'i18next';
import axios from 'axios';

export function addRestaurant(values, succcessCallback) {
    return function (dispatch, getState) {
        let path = APIConstants.GET_RESTAURANTS;
        var config = {
            headers: {'Authorization': getState().login.token}
        };
        let data = values;
        axios.post(path, data, config)
            .then(res => {
                succcessCallback();
            }, (error) => {
                alertify.logPosition('top right');
                alertify.error(i18next.t("ERROR_TRY_AGAIN_LATER"));
            });
    }

}