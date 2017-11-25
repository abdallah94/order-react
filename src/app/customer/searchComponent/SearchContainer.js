/**
 * Created by Abdallah on 4/24/2017.
 */
/* Components */
import {Search} from "./Search";
import {PathConstants} from "../../../utils";
import {getRestaurants} from "../../shared";
/* Modules */
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import i18next from 'i18next';
import {chooseArea, chooseType} from "../actions";

const mapStateToProps = (state) => {
    let options = state.areas.areas && state.areas.areas.length ? state.areas.areas : [];
    let types = state.types.types && state.types.types.length ? state.types.types : [];
    let area = state.area && state.area.area ? state.area.area : "";
    return {//TODO: Add Restaurants from API
        options: options,
        area: area,
        types: types
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        findRestaurant: (name, type) => {
            let options = {pathname: PathConstants.PATH_APP_CUSTOMER_RESTAURANTS};
            if (name) {
                options.query = {name: name}
            }
            if (type) {
                options.query = {type: type};
            }
            browserHistory.push(options);
        },
        getRestaurants: () => {
            dispatch(getRestaurants(""));
        },
        chooseArea: (area) => {
            dispatch(chooseArea(area));
        },
        chooseCuisine: (type) => {
            dispatch(chooseType(type));
        }
    }
};

let SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export {SearchContainer};