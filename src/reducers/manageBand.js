let id = 1;
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let band = Object.assign({}, action.band, {id: id});
      id++;
      return { bands: state.bands.concat(band) }
    case 'DELETE_BAND':
      let bands = state.bands.filter((band)=>{
        return band.id !== action.id;
      });
      return {bands: bands};
    default:
      return state;
  }
};
