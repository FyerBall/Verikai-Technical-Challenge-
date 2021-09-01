import { combineReducers } from "redux";
import dataReducer from "./data/dataReducer";

const reducers = combineReducers({
  data: dataReducer,
});

export default reducers;
