let id = 0;
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { bands: [...state.bands, {...action.band, id: ++id}]}
    case 'DELETE_BAND':
    	return { bands: state.bands.filter((bands)=> bands.id !== action.id)}
    default:
      return state;
  }
};
