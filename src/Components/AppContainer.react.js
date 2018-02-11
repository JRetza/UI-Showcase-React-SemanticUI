import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
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
        {this.props.children}
        <UserMessages componentRef={ref => this.userMessages = ref} />
      </div>
    );
  }
}

export default AppContainer;
