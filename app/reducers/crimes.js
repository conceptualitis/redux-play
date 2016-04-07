import { RECEIVECRIMES } from '../constants';

const initialState = {
  data: []
};

export default function update(state = initialState, action) {
  switch(action.type) {
    case RECEIVECRIMES:
      return Object.assign({}, state, { data: action.crimes });
    default:
      return state;
  }
}
