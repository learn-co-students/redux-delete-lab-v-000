export default function manageBand(
  state = {
    bands: []
  },
  action
) {
  switch (action.type) {
    case "ADD_BAND": {
      return {
        ...state,
        bands: [
          ...state.bands,
          {
            id:
              state.bands.length === 0
                ? 1
                : state.bands[state.bands.length - 1].id + 1,
            name: action.name
          }
        ]
      };
    }
    case "DELETE_BAND": {
      return {
        ...state,
        bands: state.bands.filter(band => band.id !== action.id)
      };
    }
    default:
      return state;
  }
}
