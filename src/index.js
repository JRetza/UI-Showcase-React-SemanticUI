/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import store from "./Store/store";
import {Provider} from "react-redux";
import Router from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("app")
);
