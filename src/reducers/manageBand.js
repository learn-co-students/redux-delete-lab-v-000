export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      const band = {
        id: Math.random(),
        name: action.name
      }

      return { bands: state.bands.concat(band) };

    case 'DELETE_BAND':
    console.log('inside delete: ', action.id)
      return {bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
