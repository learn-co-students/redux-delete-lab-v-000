import uuid from 'uuid';
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
     const band = {
        id: uuid(),
        bandName: action.bandName
      }
      return { bands: state.bands.concat(band) };

    case 'DELETE_BAND':
      return {...state, bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
