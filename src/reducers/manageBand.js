export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: Math.random()*1000000000,
        name: action.name
      }

      return {  bands: state.bands.concat(band)  }

    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id);
      return { bands };

    default:
      return state;
  }
};
