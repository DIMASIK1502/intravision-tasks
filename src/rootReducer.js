import { combineReducers } from "redux";

import common from "./reducers/common";

export default rootReducer =>
  combineReducers({
    common
  });
