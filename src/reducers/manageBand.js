export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {

    case 'ADD_BAND':

      const newBand = {
      name: action.name,
      id: Math.random()*999999999999999
    }

      return { ...state, bands: [...state.bands, newBand] }

    case 'DELETE_BAND':

      return { bands: state.bands.filter(band => action.id !== band.id) }

    default:
      return state;
  }
};
