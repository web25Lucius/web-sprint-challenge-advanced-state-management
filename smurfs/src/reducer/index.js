import { combineReducers } from "redux";
import { smurfReducer } from "./sReducer";
import { formReducer } from "./fReducer";

export default combineReducers({
  smurfReducer,
  formReducer
});