/**
 * Created by Abdallah on 4/24/2017.
 */

/* Components */
import {Search} from "./Search";
import {Constants} from '../../../utils';
/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {//TODO: Add Restaurants from API
        options: getDummyData(),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

//TODO: Delete dummy data
function getDummyData() {
    return [{value: 0, label: "Restaurant", disabled:true}, {value: 1, label: "MCdonalds"}, {value: 2, label: "KFC"}, {
        value: 3,
        label: "Mr.Pizza"
    }, {
        value: 4,
        label: "Buffalo wings"
    }];
}

let SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export {SearchContainer};