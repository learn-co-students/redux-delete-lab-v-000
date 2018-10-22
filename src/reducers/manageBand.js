export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    debugger
      const band = {
        id: Math.random()*10000000000000000,
        name: action.name
      }
      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      return {bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
