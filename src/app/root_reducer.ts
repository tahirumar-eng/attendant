import { combineReducers } from "redux";
import authSlice from "../features/signin/authSlice";

const rootReducer = combineReducers({
  auth: authSlice,
});

export default rootReducer;
