import { GET_ALL_PERSONS_SUCCESS } from "../actions/types";

const initialState = {
  persons: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_ALL_PERSONS_SUCCESS) {
    console.log("Event: ", action.payload.data);
    return {
      persons: action.payload.data,
    };
  }
  return state;
}

export default rootReducer;