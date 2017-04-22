/**
 * Created by Abdallah on 4/23/2017.
 */
import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./reducer";
import thunk from "redux-thunk";

/* eslint-disable no-underscore-dangle */
const store = createStore(reducers, compose(applyMiddleware(thunk), /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
/* eslint-enable */

export default store;