import { RECEIVECRIMES, RECEIVEARRESTS, UPDATEARREST, EDITARREST } from '../constants';

const initialState = {
  editingArrest: null,
  arrests: [],
  crimes: []
};

export default function update(state = initialState, action) {
  switch(action.type) {
    case RECEIVECRIMES:
      return Object.assign({}, state, { crimes: action.crimes });
    case RECEIVEARRESTS:
      return Object.assign({}, state, { arrests: action.arrests });
    case EDITARREST:
      return Object.assign({}, state, { editingArrest: action.id });
    case UPDATEARREST:
      return Object.assign({}, state, {
        arrests: state.arrests.map(arrest => {
          if (arrest.arrest_stats_id === action.id) {
            return Object.assign({}, arrest, {
              Description: action.description
            });
          }

          return arrest;
        })
      });
    default:
      return state;
  }
}
