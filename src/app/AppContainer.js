/**
 * Created by Abdallah on 4/23/2017.
 */
/* Components */
import App from "./App";
import {loginAction} from './login';
/* Modules */
import {connect} from "react-redux";
import i18next from "i18next";
import {loadAreas, loadCuisineTypes} from "./customer/actions";

const mapStateToProps = (state, ownProps) => {
    return {
        loggedIn: state.login.loggedIn,
        role: state.login.role,
        language:i18next.language,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUserInfo: (userDetails) => {
            dispatch(loginAction(userDetails.role, userDetails.id, userDetails.token,userDetails.restaurant_id));
        },
        loadAreas:()=>{
            dispatch(loadAreas());
        },

        loadCuisines:()=>{
            dispatch(loadCuisineTypes())
    }
    }
};

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;