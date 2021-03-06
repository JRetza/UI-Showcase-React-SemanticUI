import React from "react";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
  render () {
    return (
      <div className="webpack-ui-menu">
        <div className="ui left vertical menu">
          <NavLink exact to="/" className="item" activeClassName="active">
            <i className="home icon"/>
            Home
          </NavLink>
          <NavLink exact to="/friend" className="item" activeClassName="active">
            <i className="users icon"/>
            Friends
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
