import React from "react";
import {Link} from "react-router";

class Header extends React.Component {
  render () {
    return (
      <div className="webpack-ui-menu">
        <div className="ui left fixed vertical menu">
          <Link to="/" className="item" activeClassName="active">
            <i className="home icon"/>
            Home
          </Link>
          <Link to="/post" className="item" activeClassName="active">
            <i className="feed icon"/>
            Posts
          </Link>
          <Link to="/photo" className="item" activeClassName="active">
            <i className="photo icon"/>
            Photos
          </Link>
          <Link to="/album" className="item" activeClassName="active">
            <i className="film icon"/>
            Albums
          </Link>
          <Link to="/friend" className="item" activeClassName="active">
            <i className="users icon"/>
            Friends
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
