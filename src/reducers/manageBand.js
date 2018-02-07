let id = 0;

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++;
      const band = Object.assign({}, action.band, { id: id });
      return Object.assign({}, state, {bands: [...state.bands, band] })
    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id);
      return  Object.assign({}, state, {bands: bands})
    default:
      return state;
  }
};
