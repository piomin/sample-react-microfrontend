import { call, put, takeEvery, all } from "redux-saga/effects";

import axios from "axios";
import { 
  ADD_PERSON, 
  ADD_PERSON_FAILURE, 
  ADD_PERSON_SUCCESS, 
  GET_ALL_PERSONS, 
  GET_ALL_PERSONS_FAILURE, 
  GET_ALL_PERSONS_SUCCESS, 
  GET_PERSON_BY_ID, 
  GET_PERSON_BY_ID_FAILURE, 
  GET_PERSON_BY_ID_SUCCESS } from "../actions/types";

// const apiUrl = process.env.REACT_APP_BACKEND_URL != null ? "http://" + process.env.REACT_APP_BACKEND_URL + "/persons" : "http://localhost:8080/persons";
const apiUrl = "/persons"

function* getPersonById(action) {
  try {
    const person = yield call(axios, apiUrl + "/" + action.payload.id);
    yield put({ type: GET_PERSON_BY_ID_SUCCESS, payload: person });
  } catch (e) {
    yield put({ type: GET_PERSON_BY_ID_FAILURE, message: e.message });
  }
}

function* getAllPersons(action) {
  try {
    const persons = yield call(axios, apiUrl);
    yield put({ type: GET_ALL_PERSONS_SUCCESS, payload: persons });
  } catch (e) {
    yield put({ type: GET_ALL_PERSONS_FAILURE, message: e.message });
  }
}

function* addPerson(action) {
  try {
    const person = yield call(axios, {
      method: "POST",
      url: apiUrl,
      data: action.payload
    });
    yield put({ type: ADD_PERSON_SUCCESS, payload: person });
  } catch (e) {
    yield put({ type: ADD_PERSON_FAILURE, message: e.message });
  }
}

function* watchGetPerson() {
  yield takeEvery(GET_PERSON_BY_ID, getPersonById);
}

function* watchGetAllPersons() {
  yield takeEvery(GET_ALL_PERSONS, getAllPersons);
}

function* watchAddPerson() {
  yield takeEvery(ADD_PERSON, addPerson);
}

export default function* rootSaga() {
  yield all([watchGetPerson(), watchGetAllPersons(), watchAddPerson()]);
}