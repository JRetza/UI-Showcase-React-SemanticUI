/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import {Router, browserHistory} from "react-router";
import store from "./Store/store";
import {Provider} from "react-redux";
import routes from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
