import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routing from "./app/Routing.jsx";
import store from "./app/store";
import {Provider} from "react-redux";
import {initializeI18} from './utils';

initializeI18();//initialize i18 package
ReactDOM.render(
    <Provider store={store}>
        <Routing  />
    </Provider>,
    document.getElementById('root')
);
