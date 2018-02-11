import UserApi from "../Api/UserApi";
import actions from "./ActionTypes";
import dispatch from "../Dispatcher/dispatch";

const userActions = {
  getAllUserMessages: () => {
    dispatch((action) => {
      UserApi.getAllUserMessages().then((response) => {
        action({
          type: actions.GET_ALL_USER_MESSAGES,
          data: response.data
        });
      }).catch((error) => {
        throw(error);
      });
    });
  }
};

export default userActions;
