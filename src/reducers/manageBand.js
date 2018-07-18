let counter = 0;

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      counter ++;
      const newBand = {...action.band, id: counter}
      return { bands: state.bands.concat(newBand) }
    case 'DELETE_BAND':
      console.log('delete', state.bands, action)
      const bands = state.bands.filter(band => band.id !== action.id)
      return { bands }
    default:
      return state;
  }
};
