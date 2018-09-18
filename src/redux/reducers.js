import { combineReducers } from "redux";
import user from "./user/reducer";
import waiters from "./waiters/meta";

export default combineReducers({
  user,
  waiters
});
