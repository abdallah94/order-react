/**
 * Created by Fujitsu on 10/22/2017.
 */
/* Components */
import {NewsLetter} from "./NewsLetter";
import {Constants} from '../../../utils';
/* Modules */
import {connect} from "react-redux";
import {subscribe} from "../actions";

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (email, location = "") => {
            let data = {
                email: email,
                location: location
            };
            dispatch(subscribe(data));
        }
    }
};

let NewsLetterContainer = connect(mapStateToProps, mapDispatchToProps)(NewsLetter);

export {NewsLetterContainer};
