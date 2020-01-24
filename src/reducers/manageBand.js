import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_BAND':
        const band = {
          id: uuid(),
          bandName: action.name
        }
        return {bands: state.bands.concat(band)}

    case 'DELETE_BAND':
    const bands = state.bands.filter(band => band.id !== action.bandId)
    
      return {
        bands
      }

    default:
      return state;
  }
};
