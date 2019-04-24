export default function manageBand(state = {
  bands: []
}, action) {
  const actionBand = {
    name: action.name,
    id: Math.random()*10000000000000000,
  }
  switch (action.type) {
    case 'ADD_BAND':

      return { ...state, bands: [...state.bands, actionBand] }

    case 'DELETE_BAND':

      return { ...state, bands: state.bands.filter(band => band !=== actionBand ) }

    default:
      return state;
  }
};
