import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';
=======
import { HashRouter } from 'react-router-dom';
>>>>>>> da97cb8d18ed5e0366798aebeacabfdaed7c0968
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import './index.css';
import App from './App';
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

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
    <HashRouter>
      <App />
    </HashRouter>
  </PersistGate>
</Provider>,
>>>>>>> da97cb8d18ed5e0366798aebeacabfdaed7c0968
rootElement
);
