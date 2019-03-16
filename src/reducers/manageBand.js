export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    	
      // Generate a long random id number for each todo created
      // and store an array of objects
      const band = {
      	id: Math.random()*10000000000000000,
      	name: action.name
      }

      return action.name !== '' ? { bands: state.bands.concat(band) } : state

    case 'DELETE_BAND':

    	return {
    		bands: state.bands.filter(band => band.id !== action.id)
    	}

    default:

      return state
  }
}
