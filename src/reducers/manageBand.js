import uuid from 'uuid'
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    let newBand = { name: action.band, id: uuid() }
    // debugger
      return { ...state, bands: [...state.bands, newBand] }
    case 'DELETE_BAND':
      return {bands: state.bands.filter(band => band.id !== action.id)}
    default:
      return state;
  }
};
