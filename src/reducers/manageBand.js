export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      return { ...state, bands: [...state.bands, {
        //Create a new object with a random id number
        id: Math.random()*100000000000000, 
        
        //and the name passed in through the band object
        name: action.bandName}
        ] }
    case 'DELETE_BAND':
      return {...state, bands: state.bands.filter(band=>{return band.id!==action.id})}

    default:
      return state;
  }
};
