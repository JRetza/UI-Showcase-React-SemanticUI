import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import Griddle, {plugins} from "griddle-react";
import UserActions from "../../Actions/UserActions";
import GridHead from "../GridComponents/GridHead";
import MessagesGrid from "../GridComponents/MessagesGrid";
import GridBody from "../GridComponents/GridBody";

@connect((store) => {
  return {
    "userMessages": store.user.userMessages,
    "isMessagesLoaded": store.user.isMessagesLoaded
  };
})

class UserMessages extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userMessages: [],
      isMessagesLoaded: false
    };
  }

  componentDidMount () {
    this.el = $(ReactDOM.findDOMNode(this));
    this.props.componentRef(this);
  }

  componentWillUnmount () {
    this.props.componentRef("");
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      userMessages: nextProps.userMessages,
      isMessagesLoaded: nextProps.isMessagesLoaded
    });
  }

  getAllUserMessages = () => {
    this.el.transition("fade left");
    UserActions.getAllUserMessages();
  }

  closeUserMessages = () => {
    this.el.transition("fade left");
  }

  render () {
    const {userMessages, isMessagesLoaded} = this.state;
    return (
      <div className="webpack-ui-user-messages transition hidden">
        <div className="ui right fixed vertical menu">
          <div className="item title">
            Messages
            <i className="remove icon" onClick={this.closeUserMessages}/>
          </div>
          {
            isMessagesLoaded ?
              <Griddle
                data={userMessages}
                plugins={[plugins.LocalPlugin]}
                styleConfig={{
                  classNames: {
                    TableBody: "griddle-table-body",
                    NextButton: "ui button theme-blue-button",
                    PreviousButton: "ui button theme-blue-button",
                    PageDropdown: "ui dropdown"
                  }
                }}
                components={{
                  Row: MessagesGrid,
                  TableContainer: () => GridHead,
                  TableBody: GridBody,
                  Filter: () => <span />,
                  SettingsToggle: () => <span />
                }} />
              :
              <div className="ui active centered inline loader"/>
          }
        </div>
      </div>
    );
  }
}

export default UserMessages;
