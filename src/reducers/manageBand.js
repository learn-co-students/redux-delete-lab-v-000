import uuid from 'uuid';


export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: uuid(),
        name: action.name
      }
  
      return { bands: state.bands.concat(band) };
     
    case 'DELETE_BAND':
      const bands= state.bands.filter(bands => bands.id !== action.id)
      return {bands}
    default:
      return state;
  }
};
