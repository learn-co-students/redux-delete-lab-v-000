export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: Math.random() * 100000000000000000000,
        name: action.payload.name
      }
      return {bands: state.bands.concat(band)}
    case 'DELETE_BAND':
       return state;
    default:
      return state;
  }
};
