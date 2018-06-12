let id = 0;

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++;
      const band = Object.assign({}, action.band, {id: id})
      console.log("This is the band:" + band.keys)
      return { bands: state.bands.concat(band) }
    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id);
      return  { bands } 
    default:
      return state;
  }
};
