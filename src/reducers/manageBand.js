import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
   console.log(action)
      const band = {
        
        id: uuid(), 
     name: action.name
     
      }
// we need a key of bands... that points to an array.
      return { bands: state.bands.concat(band)}
      //  came with the lab
      // return { ...state, bands: [...state.bands, band] };
    
    case 'DELETE_BAND':
      return { bands: state.bands.filter(band => band.id!== action.id)}

    default:
      return state;
  }
};
