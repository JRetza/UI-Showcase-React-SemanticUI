import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./Components/App";
import AppContainer from "./Components/AppContainer";
import Home from "./Components/Home";
import Friends from "./Components/Friends";

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={App} />
    <Route path="/home" component={Home} />
    <Route path="/friends" component={Friends} />
  </Route>
);
