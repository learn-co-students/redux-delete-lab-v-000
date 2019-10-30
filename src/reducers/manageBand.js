import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      return { ...state, bands: [...state.bands, {name: action.name, id: uuid()}] }

    case 'DELETE_BAND':
      console.log(action);
      return { ...state, bands: state.bands.filter(band => band.id !== action.id) }

    default:
      return state;
  }
};
