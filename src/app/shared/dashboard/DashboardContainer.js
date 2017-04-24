/**
 * Created by Abdallah on 4/24/2017.
 */

/* Components */
import Dashboard from "./Dashboard";
/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

let DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export {DashboardContainer};