export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { bands: state.bands.concat(action.band) }
    case 'DELETE_BAND':
    	const bands = state.bands.filter(band => band.id !== action.id)
    	return {bands}
    default:
      return state;
  }
};
