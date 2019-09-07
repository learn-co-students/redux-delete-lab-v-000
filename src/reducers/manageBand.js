export default function manageBand(state = {
  bands: []
}, action) {
  console.log('manageBand Reducer', action)
  let band
  switch (action.type) {
    case 'ADD_BAND':
      band = {
        id: Math.random() * 10000000000000000,
        bandName: action.bandName
      }
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
      console.log('manageBand Reducer in delete', action)

      return { bands: state.bands.filter(band => band !== action.payload) }

    default:
      return state;
  }
};
