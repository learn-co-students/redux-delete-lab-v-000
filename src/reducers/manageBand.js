export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

     const band = {
       id: Math.random()*10000000000000000,    //solution just did Math.random(), didn't multiply
       name: action.name
     } 

      //return { bands: state.bands.concat(band) }    this also works

      return { ...state, bands: [...state.bands, band] }  //use spread operator to return a copy of state as is 
                                                          //& return bands as is then add band object to bands

    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id)   //do not wrap in {} bc making a const                                                
        return { bands }                                                //filter out what doesn't match id
                                                                       //return bands w/o the deleted band

    default:
      return state;
  }
};
