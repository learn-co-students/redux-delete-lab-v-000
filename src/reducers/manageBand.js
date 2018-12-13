const uuid = require('uuid/v1')

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let newBand = {
        name: action.name,
        id: uuid()
      }
      return { ...state, bands: [...state.bands, newBand] }

    case 'DELETE_BAND':
      return {...state, bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
