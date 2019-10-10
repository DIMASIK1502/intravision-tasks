import { combineReducers } from "redux";

import common from "./reducers/common";
import orders from "./reducers/orders";

export default rootReducer =>
  combineReducers({
    common,
    orders
  });
