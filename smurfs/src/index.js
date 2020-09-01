import React from "react";
import ReactDOM from "react-dom";
import logger from "redux-logger";
import thunk from "redux-thunk";
import combineReducers from './reducer/index';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./App";

const store = createStore(combineReducers, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
