import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";

class Header extends React.Component {
  componentDidMount () {
    this.el = $(ReactDOM.findDOMNode(this));
    this.el.find(".ui.dropdown").dropdown();
  }

  getMessages = () => {
    this.props.getAllUserMessages();
  }

  render () {
    return (
      <div className="webpack-ui-header">
        <div className="ui secondary menu">
          <Link to="/" className="item">
            <i className="wikipedia icon"/>
            Webpack|React
          </Link>
          <div className="right menu">
            <a className="item">
              <i className="list icon"/>
            </a>
            <a className="item" onClick={this.getMessages}>
              <i className="mail icon"/>
            </a>
            <div className="ui dropdown item">
              <span className="username">Praveenkumar</span>
              <img className="ui avatar image" src="/images/avatar.jpg"/>
              <div className="menu">
                <a className="item">Profile</a>
                <a className="item">Settings</a>
                <a className="item">Log out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
