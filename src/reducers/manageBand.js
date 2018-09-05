export default function manageBand(state = {
  bands: []
}, action) {

  switch (action.type) {
    case 'ADD_BAND':
      const newBand = {
        id: Math.random()*10000000000000000,
        bandName: action.name
      }
      return { ...state, bands: [...state.bands, newBand] }

    case 'DELETE_BAND':
    debugger
      return {bands: state.bands.filter(band => band !== action.id)}

    default:
      return state;
  }
};
