import { combineReducers } from "redux";
import diaries from "./diaries";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import { reducer as formReducer } from 'redux-form';

import { LOGOUT_SUCCESS } from "../actions/types";

// const appReducer = combineReducers({
//   errors,
//   diaries,
//   messages,
//   auth,
// });
// const rootReducer = (state, action) => {
//   if (action.type === LOGOUT_SUCCESS) {
//     state = undefined;
//   }
//   return appReducer(state, action);
// };

const rootReducer= combineReducers({
  errors,
  diaries,
  messages,
  auth,
  form: formReducer,
});
export default rootReducer;