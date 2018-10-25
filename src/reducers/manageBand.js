export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      console.log(state)
      const band = { id: Math.random(), name: action.name }
      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      const bands = state.bands.filter((band) => action.id !== band.id)
      return { bands }

    default:
      return state;
  }
};
