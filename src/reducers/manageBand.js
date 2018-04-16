let id = 0

export default function manageBand(state = { bands: [] }, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const newBand = {
        ...action.band,
        id: ++id
      }
      return { bands: [...state.bands, newBand] }

    case 'DELETE_BAND':
      const bands = state.bands.filter(({id}) => id !== action.id)
      return { bands }

    default:
      return state;
  }
};
