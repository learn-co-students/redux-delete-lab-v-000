var id = 0;

export default function manageBand(state = {bands: []}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { bands: state.bands.concat({text: action.band.text, id: ++id}) };
    case 'DELETE_BAND':
      const bands = state.bands.filter((band) => band.id !== action.id);
      return { bands: bands}
    default:
      return state;
  }
};
