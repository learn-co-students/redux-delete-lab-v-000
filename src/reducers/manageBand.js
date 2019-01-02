export default function manageBand(state = {
  bands: []
}, action) {
  console.log(action);
  switch (action.type) {
    
    case 'ADD_BAND':

      return { ...state, bands: [...state.bands, {id: Math.random(), name: action.name}] }

    case 'DELETE_BAND':

      return {bands: state.bands.filter(band => band.id !== action.id)};

    default:
      return state;
  }
};
