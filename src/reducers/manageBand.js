export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: Math.random() * 10000000000,
        bandName: action.name
      }
      // debugger
      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      return { ...state, bands: state.bands.filter(band => band.id !== action.id ) }

    default:
      return state;
  }
};
