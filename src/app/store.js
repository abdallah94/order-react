/**
 * Created by Abdallah on 4/23/2017.
 */
import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./reducer";
import thunk from "redux-thunk";

/* eslint-disable no-underscore-dangle */
const store = createStore(reducers, compose(applyMiddleware(thunk),   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) /* preloadedState, */
);
/* eslint-enable */

export default store;