import { combineReducers } from "redux";
import lists from "./reducer";

const initialState = {
  isFetching: false,
  lastReceived: null
};

const meta = (state = initialState, action) => {
  switch (action.type) {
    case "START_RETRIEVE":
      return { isFetching: true };
    case "RECEIVED_LISTS":
      return { isFetching: false, lastReceived: Date.now() };
    default:
      return state;
  }
};

const waiters = combineReducers({
  meta,
  lists
});

export default waiters;
