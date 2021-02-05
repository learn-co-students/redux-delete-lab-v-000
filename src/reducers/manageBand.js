export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, action.name] }

    case 'DELETE_BAND':
      console.log("{ bands: state.bands.filter(band => band !== action.payload) }", { bands: state.bands.filter(band => band !== action.payload) })
      return { ...state, bands: [...state.bands.filter(band => band !== action.payload)] }
   // }

      break;

    default:
      return state;
  }
};
