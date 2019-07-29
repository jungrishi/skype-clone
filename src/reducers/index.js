import user from "./user";
import contacts from "./contact";
import activeUserId from "./activeUserId";
import { combineReducers } from "redux";

export default combineReducers({
  user,
  contacts,
  activeUserId,
});
