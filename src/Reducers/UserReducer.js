import actions from "../Actions/ActionTypes";

const initialState = {
  userMessages: [],
  isMessagesLoaded: false
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.GET_ALL_USER_MESSAGES:
      return {
        ...state,
        isMessagesLoaded: true,
        userMessages: action.data
      };
    default:
      return state;
  }
};

export default userReducer;
