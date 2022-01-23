import { combineReducers } from "redux";
import alertReducer from "./Alert/AlertReducer";

const reducers = combineReducers({ alertReducer });
export default reducers;
