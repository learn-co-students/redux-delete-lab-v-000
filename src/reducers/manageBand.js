export default function manageBand(state = {
  bands: []
}, action) {
  // debugger
  switch (action.type) {
    case 'ADD_BAND':
      const band = {id: Math.random()*10000, name: action.name}
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
      return {...state, bands: state.bands.filter(b => b.id !== action.id)}

    default:
      return state;
  }
};
