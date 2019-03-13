import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import './index.css';
import App from './App';
import rootReducer from "./reducers";


<<<<<<< HEAD
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
=======
const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
>>>>>>> d3078d338a936303c717236db601f35199ba9cfe

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
<<<<<<< HEAD
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
=======
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <Router>
      <App />
    </Router>
  </PersistGate>
</Provider>,
>>>>>>> d3078d338a936303c717236db601f35199ba9cfe
rootElement
);
