/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import {Router, browserHistory} from "react-router";
import configureStore from "./Store/configureStore";
import {Provider} from "react-redux";
import routes from "./routes";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
