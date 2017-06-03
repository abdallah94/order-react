/**
 * Created by Abdallah on 4/24/2017.
 */
/* Components */
import {Search} from "./Search";
import {PathConstants} from '../../../utils';
/* Modules */
import {connect} from "react-redux";
import {browserHistory} from 'react-router';

const mapStateToProps = (state) => {
    return {//TODO: Add Restaurants from API
        options: getDummyData(),
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
        }
    }
};

//TODO: Delete dummy data
function getDummyData() {
    return [{value: 0, label: "Restaurant", disabled: true}, {value: 1, label: "MCdonalds"}, {value: 2, label: "KFC"}, {
        value: 3,
        label: "Mr.Pizza"
    }, {
        value: 4,
        label: "Buffalo wings"
    }];
}

let SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export {SearchContainer};