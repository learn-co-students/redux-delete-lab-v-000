import uuid from "uuid";

const defaultState = {
  bands: [],
};

export default function manageBand(state = defaultState, action) {
  switch (action.type) {
    case "ADD_BAND":
      const band = { id: uuid(), name: action.name };
      return { ...state, bands: [...state.bands, band] };
    case "DELETE_BAND":
      return {
        ...state,
        bands: state.bands.filter(({ id }) => id !== action.id),
      };
    default:
      return state;
  }
}
