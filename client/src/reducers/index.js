import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import {postMessage} from "./postMessage"

export const reducers = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  postMessage

});
export default reducers;
