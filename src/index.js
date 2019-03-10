import axios from "axios/index";
import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore, compose,} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import './index.scss';
import App from './App';
import ethReducer from "./reducers/EthReducer";
import claimReducer from "./reducers/ClaimReducer";
import userReducer from "./reducers/UserReducer";
import registerServiceWorker from './registerServiceWorker';

/**
 * init store with contextual data from the API
 */
const reducer = combineReducers({
    eth: ethReducer,
    claim: claimReducer,
    user: userReducer
});


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk)),
);


export {store};

/**
 * set axios base configuration
 */
axios.interceptors.request.use(function (config) {
  config.url = 'http://35.180.63.147:8080' + config.url;
  return config;
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
