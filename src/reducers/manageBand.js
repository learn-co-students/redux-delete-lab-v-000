let id = 1;

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {...action.band, id};
      id++;
      return { bands: state.bands.concat(band) }
    case 'DELETE_BAND':
      const index = state.bands.findIndex(band => band.id === action.id);
      return {
        bands: [
          ...state.bands.slice(0, index),
          ...state.bands.slice(index + 1)
        ]
      }
    default:
      return state;
  }
};
