import { 
    ADD_PERSON, 
    GET_PERSON_BY_ID, 
    GET_ALL_PERSONS,
    REMOVE_PERSON, 
    UPDATE_PERSON } from "./types";

export function getPersonById(payload) {
  return { type: GET_PERSON_BY_ID, payload };
}

export function getAllPersons(payload) {
  return { type: GET_ALL_PERSONS, payload };
}

export function addPerson(payload) {
  return { type: ADD_PERSON, payload };
}

export function updatePerson(payload) {
  return { type: UPDATE_PERSON, payload };
}

export function removePerson(payload) {
  return { type: REMOVE_PERSON, payload };
}