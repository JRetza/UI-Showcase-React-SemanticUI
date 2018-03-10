import React from "react";
import {Route} from "react-router";
import AppContainer from "./Components/AppContainer";
import Home from "./Components/Home";
import Friends from "./Components/Friends/Friends";

export default (
  <Route path="/" component={AppContainer}>
    <Route path="/home" component={Home}/>
    <Route path="/friend" component={Friends}/>
  </Route>
);
