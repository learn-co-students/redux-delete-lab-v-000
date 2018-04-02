let id = 0;

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++;
      const BAND = Object.assign({}, action.band, {id: id});
      return { bands: state.bands.concat(BAND) };
    case 'DELETE_BAND':
      const BANDS = state.bands.filter(band => band.id !== action.id);
      return {bands: BANDS};
    default:
      return state;
  }
};
