import { RECEIVECRIMES, RECEIVEARRESTS } from '../constants';

const initialState = {
  arrests: [],
  crimes: []
};

export default function update(state = initialState, action) {
  if (action.type === RECEIVECRIMES) {
    return Object.assign({}, state, { crimes: action.crimes });
  } else if (action.type === RECEIVEARRESTS) {
    return Object.assign({}, state, { arrests: action.arrests });
  }

  return state;
}
