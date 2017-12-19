let id = 0;
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++
      const bands = Object.assign({}, action.band, {id: id })
      return { bands: state.bands.concat(bands) }
    case 'DELETE_BAND':
      const filteredBandList = state.bands.filter(band => band.id !== action.id)
      return { bands: filteredBandList}
    default:
      return state;
  }
};
