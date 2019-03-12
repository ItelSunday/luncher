import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

// Provider/Loggers
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
=======
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import App from './App';
>>>>>>> 20870adfe56274312d3c4bd7aa539388a3dd2129
import rootReducer from "./reducers";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);


ReactDOM.render(
<<<<<<< HEAD
<Provider store={store}>
    <Router>
    <App />
    </Router>
</Provider>,
 document.getElementById('root'));


=======
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById('root'));
>>>>>>> 20870adfe56274312d3c4bd7aa539388a3dd2129
