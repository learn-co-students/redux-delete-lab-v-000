let id = 0;

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++;
      let band = {...action.band, id: id}
      return { bands: state.bands.concat(band) }
    case 'DELETE_BAND':
      return { bands: state.bands.filter(x => x.id !== action.id)}
    default:
      return state;
  }
};
