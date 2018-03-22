import React from "react";
import {connect} from "react-redux";
import Griddle, {plugins} from "griddle-react";
import FriendsActions from "../../Actions/FriendsActions";
import GridHead from "../GridComponents/GridHead";
import GridBody from "../GridComponents/GridBody";
import FriendsGrid from "../GridComponents/FriendsGrid";

@connect((store) => {
  return {
    "friends": store.friends.friends,
    "isFriendsLoaded": store.friends.isFriendsLoaded
  };
})

class Friends extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      friends: [],
      isFriendsLoaded: false
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      friends: nextProps.friends,
      isFriendsLoaded: nextProps.isFriendsLoaded
    });
  }

  componentDidMount () {
    FriendsActions.getAllFriends();
  }

  render () {
    const {friends, isFriendsLoaded} = this.state;
    return (
      <div className="webpack-ui-body">
        <h2>This page uses Griddle React</h2>
        <div className="webpack-ui-friends">
          {
            isFriendsLoaded ?
                <Griddle
                  data={friends}
                  plugins={[plugins.LocalPlugin]}
                  styleConfig={{
                    classNames: {
                      TableBody: "ui four cards",
                      NextButton: "ui button theme-blue-button",
                      PreviousButton: "ui button theme-blue-button",
                      PageDropdown: "ui dropdown"
                    }
                  }}
                  components={{
                    Row: FriendsGrid,
                    TableContainer: () => GridHead,
                    TableBody: GridBody,
                    Filter: () => <span />,
                    SettingsToggle: () => <span />
                  }}
                  pageProperties={{
                    pageSize: 4
                  }} />
              :
                <div className="ui active centered inline loader"/>
          }
        </div>
      </div>
    );
  }
}

export default Friends;
