import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        ...action.band,
        id: uuid()
      }

      return { bands: [...state.bands, band] }

    case 'DELETE_BAND':
    console.log(action)
      const newState = { bands: state.bands.filter(band => band.id !== action.id) }
debugger;
      return newState;

    default:
      return state;
  }
};
