export default function manageBand(state = {
  bands: []
}, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_BAND':

    const band = {
      id: Math.random()*10000000000000000,
      bandName: action.payload.bandName
    }

      return { ...state, bands: [...state.bands, action.name] }

    case 'DELETE_BAND':

    return {bands: state.bands.filter(band => band.id !== action.payload)}

    default:
      return state;
  }
};
