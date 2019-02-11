
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      const band={
          id: Math.random()*10000000000000000,
          name: action.name
      }

      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      const newBands = state.bands.filter(band => band.id !== action.id)
      return {...state, bands: newBands}
    default:
      return state;
  }
};
