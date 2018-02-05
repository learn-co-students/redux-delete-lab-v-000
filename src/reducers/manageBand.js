let i = 0
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      i++
      const band = Object.assign({}, action.band, {id: i})
      return { bands: state.bands.concat(band) }
    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id)
      return {bands}
    default:
      return state;
  }
};
