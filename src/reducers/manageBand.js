let id = 0;

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++

      let newBand = Object.assign({}, action.band, {id: id})
      let newBands = [...state.bands, newBand];
      return { bands: newBands };
    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id)
      return { bands };
    default:
      return state;
  }
};
