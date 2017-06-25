/**
 * Created by Abdallah on 4/23/2017.
 */
/* Components */
import App from "./App";
import {loginAction} from './login';
/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        loggedIn: state.login.loggedIn,
        role: state.login.role
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUserInfo: (userDetails) => {
            dispatch(loginAction(userDetails.role, userDetails.id));
        }
    }
};

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;