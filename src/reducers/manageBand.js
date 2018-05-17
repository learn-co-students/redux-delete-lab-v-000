let id = 0

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++
      const band = {...action.band, id: id }
      return { bands: state.bands.concat(band) }
    case 'DELETE_BAND':
      let bandId = action.id
      const bands = { bands: state.bands.filter(band => band.id !== bandId) }
      return bands
    default:
      return state;
  }
};
