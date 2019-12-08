import uuid from 'uuid';

export default function manageBand(
	state = { bands: [], }, 
	action
	) {
  switch (action.type) {
    case 'ADD_BAND':
    console.log(action)
      const band = {
        id: uuid(),
        name: action.band.bandName
      }
      console.log(band)
      return { bands: [...state.bands, band ] };

    case 'DELETE_BAND':
  return {bands: state.bands.filter(band => band.id !== action.band.id)}
 
    default:
      return state;
  }
};
