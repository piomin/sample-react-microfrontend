import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import { GET_ALL_PERSONS, GET_ALL_PERSONS_FAILURE, GET_ALL_PERSONS_SUCCESS, GET_PERSON_BY_ID, GET_PERSON_BY_ID_FAILURE, GET_PERSON_BY_ID_SUCCESS } from "../actions/types";

const apiUrl = "http://localhost:8080/persons";

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

function* watchGetPerson() {
  yield takeEvery(GET_PERSON_BY_ID, getPersonById);
}

function* watchGetAllPersons() {
  yield takeEvery(GET_ALL_PERSONS, getAllPersons);
}

export default function* rootSaga() {
  yield all([watchGetPerson(), watchGetAllPersons()]);
}