export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
     const band = {id: Math.random()*10000000000000000, name: action.name}
     return{...state, bands: [...state.bands, band]}
    case 'DELETE_BAND':
      // Create a new array of band object that doesnt include the band we are deleting
      const bands = state.bands.filter(band => band.id !== action.id);
      // the new state
      return { bands };
    default:
      return state;
  }
};
