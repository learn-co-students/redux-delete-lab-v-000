export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {

    case 'ADD_BAND':
    // console.log("reducer add Band (action.name):", action.name)
      const band = { id: Math.random(), name: action.name }

    // console.log("add band reducer id (band.id):", band.id)
        return  { bands: state.bands.concat(band) }

     case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id)

        // console.log("delete_reducer (bands length):", bands.length)
        return {bands}

     default:
        return state;
  }
};

  // can also use the following when adding a band to state
// { ...state, bands: [...state.bands, band] }
