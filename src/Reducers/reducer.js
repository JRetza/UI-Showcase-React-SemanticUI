import {combineReducers} from "redux";
import friends from "./FriendsReducer";

const rootReducer = combineReducers({
  friends
});

export default rootReducer;
