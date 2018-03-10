import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Menu from "./Menu";
import UserMessages from "./Messages/UserMessages";

class AppContainer extends React.Component {
  componentDidMount () {
    this.el = $(ReactDOM.findDOMNode(this));
  }

  getAllUserMessages = () => {
    this.userMessages.getAllUserMessages();
  }

  render() {
    return (
      <div className="webpack-ui">
        <Header getAllUserMessages={this.getAllUserMessages}/>
        <div className="webpack-ui-container ui grid">
          <div className="three wide column padding-0">
            <Menu/>
          </div>
          <div className="thirteen wide column padding-0">
            {this.props.children}
          </div>
        </div>
        <UserMessages componentRef={ref => this.userMessages = ref} />
      </div>
    );
  }
}

export default AppContainer;
