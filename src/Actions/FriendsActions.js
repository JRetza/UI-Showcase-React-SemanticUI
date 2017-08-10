import FriendsApi from "../Api/FriendsApi";
import actions from "./ActionTypes";

const friendsActions = {
  getAllFriends: () => {
    return (dispatch) => {
      FriendsApi.getAllFriends().then((friends) => {
        dispatch({
          type: actions.GET_ALL_FRIENDS,
          data: friends.data
        });
      }).catch((error) => {
        throw(error);
      });
    };
  }
};

export default friendsActions;
