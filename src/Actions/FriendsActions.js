import FriendsApi from "../Api/FriendsApi";
import actions from "./ActionTypes";
import dispatch from "../Dispatcher/dispatch";

const friendsActions = {
  getAllFriends: () => {
    dispatch((action) => {
      FriendsApi.getAllFriends().then((friends) => {
        action({
          type: actions.GET_ALL_FRIENDS,
          data: friends.data
        });
      }).catch((error) => {
        throw(error);
      });
    });
  }
};

export default friendsActions;
