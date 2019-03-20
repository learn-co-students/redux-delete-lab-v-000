export default function manageBand(state = {
  bands: []
}, action) {
  console.log("first action": action)
  switch (action.type) {
    case 'ADD_BAND':

      const band = {
        id: Math.random()*100000000000,
        name: action.name   
      }
      // return { ...state, band: [...state.band, action.payload] }
      return {bands: state.bands.concat(band)};

    case 'DELETE_BAND':
    console.log("delete action working?": action)
     
       const bands = state.bands.filter(
          band => band.id !== action.id);
       return { bands };

    default:
      return state;
  }
};
