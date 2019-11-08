import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      const band = {
        
        id: uuid(), 
     text: action.payload.text

      }

      return {...state.bands.concat(band)}
      //  came with the lab
      // return { ...state, bands: [...state.bands, action.name] };
    
    case 'DELETE_BAND':
      return { bands: state.bands.filter(band => band.id!== action.payload)}

    default:
      return state;
  }
};
