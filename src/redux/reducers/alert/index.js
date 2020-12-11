import { combineReducers } from "redux";
import { alert } from "./alertReducer";

const alertReducers = combineReducers({
  alert,
});

export default alertReducers;
