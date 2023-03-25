import { combineReducers } from "redux";

const defaultReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  default: defaultReducer,
});
