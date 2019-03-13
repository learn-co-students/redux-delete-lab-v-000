export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

    const band = {
        id: Math.random()*10000000000000000,
        name: action.name
      }

      return { ...state, bands: [...state.bands, action.name] }


      case 'DELETE_TODO':

          return {name: state.bands.filter(band => band !== action.name)}

    default:
      return state;
  }
};
