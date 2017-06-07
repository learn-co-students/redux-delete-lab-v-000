let id = 0
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++
      let band = Object.assign({}, action.band, {id: id})
      return { bands: state.bands.concat(band) }
    case 'DELETE_BAND':
      let bands = state.bands.filter(band => band.id !== action.id);
      return {bands}
    default:
      return state;
  }
};
