let count = 0

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    count++;
      var band = Object.assign({}, action.band, {id: count})
      return { bands: state.bands.concat(band) }

      case 'DELETE_BAND':
      return  {bands: state.bands.filter( band => band.id != action.id)}
    default:
      return state;
  }
};
