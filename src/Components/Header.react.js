import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  componentDidMount () {
    this.el = $(ReactDOM.findDOMNode(this));
  }

  handleClick = (event) => {
    $(event.target).addClass("active");
    $(event.target).closest(".ui.menu").find(".item").not($(event.target))
        .removeClass("active");
  }

  render () {
    return (
      <div>
        <div className="ui secondary pointing menu">
          <a className="item active" onClick={this.handleClick}>
            App
          </a>
          <a className="item" onClick={this.handleClick}>
            Home
          </a>
          <div className="right menu">
            <a className="ui item" onClick={this.handleClick}>
              Logout
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
