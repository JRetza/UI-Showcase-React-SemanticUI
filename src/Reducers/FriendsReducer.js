import actions from "../Actions/ActionTypes";

const initialState = {
  friends: [],
  isFriendsLoaded: false
};

const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.GET_ALL_FRIENDS:
      return {
        ...state,
        friends: action.data,
        isFriendsLoaded: true
      };
    default:
      return state;
  }
};

export default friendsReducer;
