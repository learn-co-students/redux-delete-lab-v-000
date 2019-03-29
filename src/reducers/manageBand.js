export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: Math.random() * 100000000000000000000,
        name: action.payload.name
      }
      return { ...state, bands: [...state.bands, action.name] }
    case 'DELETE_BAND':
       return {bands: state.bands.filter(band.id => !== action.payload)}
    default:
      return state;
  }
};
