import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import './index.scss';
import App from './App';
import ethReducer from "./reducers/EthReducer";
import claimReducer from "./reducers/ClaimReducer";
import registerServiceWorker from './registerServiceWorker';

/**
 * init store with contextual data from the API
 */
const reducer = combineReducers({
    eth: ethReducer,
    claim: claimReducer
});


const store = createStore(
    reducer,
    applyMiddleware(thunk),
);

export {store};

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