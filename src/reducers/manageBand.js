let id = 0;

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++
      return { ...state, bands: state.bands.concat({ text: action.band.text, id: id }) }
    case 'DELETE_BAND': 
      return { ...state, bands: state.bands.filter(band => band.id !== action.id) }
    default:
      return state;
  }
};
