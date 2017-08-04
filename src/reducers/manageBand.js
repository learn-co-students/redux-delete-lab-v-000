let id = 0
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++
      return { bands: state.bands.concat(Object.assign(action.band, {id: id})) }
    case 'DELETE_BAND': 
      return {bands: state.bands.filter((band) => {return band.id != action.id})}
    default:
      return state;
  }
};
