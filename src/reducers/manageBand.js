let id = 0

export default function manageBand(state = {
  bands: []
}, action) {

  switch (action.type) {
    case 'ADD_BAND':
      id++
      let band = {text: action.band, id}
      return { bands: state.bands.concat(band) }
    case 'DELETE_BAND':
    console.log(state)
    console.log(action)
    console.log(state.bands.filter(band => band.id !== action.id))
      return { bands: state.bands.filter(band => band.id !== action.id) }
    default:
      return state;
  }
};
