export default function manageBand(state={bands:[]}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { bands: [...state.bands, action.band] }
    case 'DELETE_BAND':
      return { bands: state.bands.filter( band => band.id !== action.id) }
     default:
      return state;
  }
};
