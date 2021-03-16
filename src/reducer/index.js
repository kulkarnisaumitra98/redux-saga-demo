import { combineReducers } from "redux";
import counterReducer from "../views/counter/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
