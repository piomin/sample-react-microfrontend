import { ADD_PERSON_SUCCESS, GET_ALL_PERSONS_SUCCESS, ADD_PERSON, GET_PERSON_BY_ID_SUCCESS } from "../actions/types";

const initialState = {
  persons: [],
  person: {},
  newPersonId: null,
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_ALL_PERSONS_SUCCESS) {
    return {
      persons: action.payload.data,
    };
  } else if (action.type === ADD_PERSON_SUCCESS) {
    return {
      person: {
        name: "",
        gender: "",
        age: 0
      },
      newPersonId: action.payload.data.id,
    };
  } else if (action.type === ADD_PERSON) {
    return {
      person: action.payload.data,
      newPersonId: null
    };
  } else if (action.type === GET_PERSON_BY_ID_SUCCESS) {
    return {
      person: action.payload.data,
    };
  }
  return state;
}

export default rootReducer;