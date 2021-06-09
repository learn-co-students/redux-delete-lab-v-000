import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
    // console.log(action)
  switch (action.type) {
    case 'ADD_BAND':
        const band={
            id: uuid(),
            bandName: action.name
        }
      return { ...state, bands: [...state.bands, band] }

    default:
      return state;
  }
};
