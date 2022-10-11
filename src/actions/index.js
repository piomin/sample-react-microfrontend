import { 
    ADD_PERSON, 
    GET_PERSON_BY_ID, 
    GET_ALL_PERSONS } from "./types";

export function getPersonById(payload) {
  return { type: GET_PERSON_BY_ID, payload };
}

export function getAllPersons(payload) {
  return { type: GET_ALL_PERSONS, payload };
}

export function addPerson(payload) {
  return { type: ADD_PERSON, payload };
}