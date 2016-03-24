import { FETCHCRIMES, RECEIVECRIMES, FETCHARRESTS, RECEIVEARRESTS } from '../constants';

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
    crimes: crimes,
    receivedAt: Date.now()
  }
};


export function fetchArrests() {
  return {
    type: FETCHARRESTS
  }
};

export function receiveArrests() {
  return {
    type: RECEIVEARRESTS,
    arrests: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
};
