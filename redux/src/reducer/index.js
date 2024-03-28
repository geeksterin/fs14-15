import CounterReducer from "./counter";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  CounterReducer,
});

export default rootReducer;
