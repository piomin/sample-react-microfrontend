import { 
  ADD_PERSON,
  ADD_PERSON_SUCCESS, 
  GET_ALL_PERSONS_SUCCESS, 
  GET_PERSON_BY_ID_SUCCESS } from "../actions/types";

const initialState = {
  persons: [],
  person: {},
  newPersonId: null,
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case GET_ALL_PERSONS_SUCCESS:
      return {
        ...state,
        persons: action.payload.data
      };
    case ADD_PERSON:
      return {
        ...state,
        person: action.payload.data,
        newPersonId: null
      };
    case ADD_PERSON_SUCCESS:
      return {
        ...state,
        person: {
          name: "",
          gender: "",
          age: 0
        },
        newPersonId: action.payload.data.id
      };
    case GET_PERSON_BY_ID_SUCCESS:
      return {
        ...state,
        person: action.payload.data
      };
    default:
      return state;
  }
}

export default rootReducer;