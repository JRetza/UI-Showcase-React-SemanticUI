import {combineReducers} from "redux";
import friends from "./FriendsReducer";
import user from "./UserReducer";

const rootReducer = combineReducers({
  friends,
  user
});

export default rootReducer;
