import React from "react";
import {connect} from "react-redux";
import FriendsActions from "../Actions/FriendsActions";

@connect((store) => {
  return {
    "friends": store.friends.friends
  };
})

class Friends extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      friends: this.props.friends
    };
  }

  componentDidMount () {
    this.props.dispatch(FriendsActions.getAllFriends());
  }

  render () {
    return (
      <div className="site-wrapper">
        My Friends page
      </div>
    );
  }
}

export default Friends;
