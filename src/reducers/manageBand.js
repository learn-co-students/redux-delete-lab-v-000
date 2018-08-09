export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      const band = {
        id: Math.random(),
        name: action.name
      }
      const newState = {...state, bands: [...state.bands, band]}
      return newState

    case 'DELETE_BAND':
    debugger
      return {bands: state.bands.filter(band => band.id !== action.id)}
    default:
      return state;
  }
};
