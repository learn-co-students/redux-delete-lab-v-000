export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    console.log("add band hit")
    console.log("action", action)
    console.log("state", state)



      const band = {
        id: Math.random(),
        name: action.name
      }

      console.log("...state, bands: [...state.bands, band]", {...state, bands: [...state.bands, band]})

      return { ...state, bands: [...state.bands, band] }
      // return { ...state.bands, band }


    case 'DELETE_BAND':
      console.log("delete band hit")
      console.log("{ bands: state.bands.filter(band => band !== action.payload) }", { bands: state.bands.filter(band => band !== action.payload) })
      console.log("action.payload", action.payload)
      console.log("action", action)
      console.log("band", state.bands )



      return { ...state, bands: [...state.bands.filter(band => band.id !== action.id)] }
   // }

      break;

    default:
      return state;
  }
};
