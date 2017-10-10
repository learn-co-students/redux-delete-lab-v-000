export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      action.band.id = state.bands.length + 1
      return { bands: state.bands.concat(action.band) }
    case 'DELETE_BAND':
      const filteredBands = state.bands.filter(band => band.id !== action.id)
      return Object.assign({}, state, {bands: filteredBands})
    default:
      return state;
  }
};
