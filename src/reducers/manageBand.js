import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  let band;
  switch (action.type) {
    case 'ADD_BAND':
      band = {name: action.name, id: uuid()}
      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      return {bands: state.bands.filter(band => band.id !== action.id)}
    default:
      return state;
  }
};
