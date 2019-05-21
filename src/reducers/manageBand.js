export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      // console.log(action)
      const band = {
        id: Math.random()*10000000000000000,
        name: action.name
      }

      return { bands: state.bands.concat(band) };

    case 'DELETE_BAND':
      console.log(action)
      return { bands: state.bands.filter( band => band.id !== action.bandId)}

    default:
      return state;
  }
};
