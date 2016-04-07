import { FETCHCRIMES, RECEIVECRIMES, FETCHARRESTS, RECEIVEARRESTS, EDITARREST, UPDATEARREST } from '../constants';

export function fetchCrimes() {
  return function(dispatch) {
    return fetch('http://nflarrest.com/api/v1/crime')
      .then(response => response.json())
      .then(crimes => dispatch(receiveCrimes(crimes)));
  }
};

export function receiveCrimes(crimes) {
  return {
    type: RECEIVECRIMES,
    crimes,
    receivedAt: Date.now()
  }
};


export function fetchArrests(id) {
  return function(dispatch) {
    return fetch(`http://nflarrest.com/api/v1/crime/arrests/${id}`)
      .then(response => response.json())
      .then(arrests => dispatch(receiveArrests(arrests)));
  }
};

export function receiveArrests(arrests) {
  return {
    type: RECEIVEARRESTS,
    arrests,
    receivedAt: Date.now()
  }
};

export function editArrest(id) {
  return {
    type: EDITARREST,
    id
  }
};

export function updateArrest(id, description) {
  return {
    type: UPDATEARREST,
    id,
    description
  }
};
