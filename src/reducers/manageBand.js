let initialState = {
  bands: []
}

export default function manageBand(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BAND':
    const band = {
      id: Math.random(),
      name: action.name
    }

      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
    return {bands: state.bands.filter(band => band.id !== action.id)}
    default:
      return state;
  }
};
