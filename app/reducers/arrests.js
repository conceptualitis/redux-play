import { RECEIVEARRESTS, UPDATEARREST, EDITARREST } from '../constants';

const initialState = {
  editingArrest: null,
  data: []
};

export default function update(state = initialState, action) {
  switch(action.type) {
    case RECEIVEARRESTS:
      return Object.assign({}, state, { data: action.arrests });
    case EDITARREST:
      return Object.assign({}, state, { editingArrest: action.id });
    case UPDATEARREST:
      return Object.assign({}, state, {
        data: state.data.map(arrest => {
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
