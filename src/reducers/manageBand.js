export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {

    case 'ADD_BAND':
      const addBand = {
        id: Math.random(),
        name: action.name.bandName
      }
      console.log(state.bands.concat(addBand))
      return { bands: state.bands.concat(addBand) };
      // state.bands = [{id: 123457, name: "Test"}, {id: 891011, name: "One"}]

    case 'DELETE_BAND':
      console.log(state.bands)
      return {bands: state.bands.filter(band => band.id !== action.payload)}
    default:
      return state;
  }
};
