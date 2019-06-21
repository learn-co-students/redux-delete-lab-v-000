import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      return { ...state, bands: [...state.bands, {...action.band, id: uuid()}] }
		case 'DELETE_BAND':
			const toDelete = state.bands.find(band => (action.id === band.id))
			const idx = state.bands.indexOf(toDelete)	

			return { bands: [...state.bands.slice(0, idx), ...state.bands.slice(idx+1)] }
    default:
      return state;
  }
};
