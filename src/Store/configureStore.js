import {createStore, applyMiddleware} from "redux";
import rootReducer from "../Reducers/reducer";
import thunk from "redux-thunk";

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
};

export default configureStore;
