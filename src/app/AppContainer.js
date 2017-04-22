/**
 * Created by Abdallah on 4/23/2017.
 */
/* Components */
import App from "./App";
/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;