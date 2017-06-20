/**
 * Created by Abdallah on 4/23/2017.
 */

import {cart} from './customer';
import {login} from './login';

import {combineReducers} from "redux";


const reducers = combineReducers({cart, login});

export default reducers;