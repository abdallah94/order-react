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

const mapStateToProps = (state) => {
    return {//TODO: Add Restaurants from API
        options: getOptions(state.restaurants),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        findRestaurant: (name) => {
            let options = {pathname: PathConstants.PATH_APP_CUSTOMER_RESTAURANTS};
            if (name) {
                options.query = {name: name}
            }
            browserHistory.push(options);
        },
        getRestaurants: () => {
            dispatch(getRestaurants(""));
        }
    }
};

function getOptions(restaurants) {
    let array = [{value: 0, label: "Restaurant", disabled: true}];
    if (restaurants) {
        for (let i in restaurants) {
            array.push({value: restaurants[i].id, label: restaurants[i].name});
        }
    }
    return array;
}

let SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export {SearchContainer};