export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      return { ...state, bands: [...state.bands, action.band] }
		case 'DELETE_BAND':
			const toDelete = state.bands.find(band => (action.band.id === band.id))
			const idx = state.bands.indexOf(toDelete)
			return { ...state, bands: [state.bands.slice(0, idx), state.bands.slice(idx+1)] }
    default:
      return state;
  }
};
