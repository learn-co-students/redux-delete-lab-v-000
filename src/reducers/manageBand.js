
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      console.log("add", state)
      const band = { id: Math.random()*10000000000000000, name: action.name }

      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      console.log("delete", action.band)
      // debugger
      return { bands: state.bands.filter(band => band.id !== action.id) }

    default:
      return state;
  }
};
