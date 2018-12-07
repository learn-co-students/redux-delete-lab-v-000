export default function manageBand(state = {
  bands: []
}, action) {

  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: Math.floor(Math.random()* 10000),
        name: action.payload
      }
      return { bands: [...state.bands, band] };

    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.payload)
      return { bands }

    default:
      return state;
  }
}
