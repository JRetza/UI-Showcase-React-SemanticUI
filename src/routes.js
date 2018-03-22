import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import AppContainer from "./Components/AppContainer";
import Home from "./Components/Home";
import Friends from "./Components/Friends/Friends";

const AppRouter = () => (
  <Router basename="/">
    <Route exact path="/">
      <AppContainer>
        <Route exact path="/" component={Home}/>
        <Route exact path="/friend" component={Friends}/>
      </AppContainer>
    </Route>
  </Router>
);
export default AppRouter;
