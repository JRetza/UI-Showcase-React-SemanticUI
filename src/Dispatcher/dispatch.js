import store from "../Store/store";

const dispatcher = (action) => {
  store.dispatch(action);
};

export default dispatcher;
