let id = 0;

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++;
      //action.band => {text: 'Joni Mitchell'}
      const band = {...action.band, id: id}
      //band => //{text: 'Joni Mitchell', id: 1}
      return { bands: state.bands.concat(band) }
    case 'DELETE_BAND':
      //action => {type: "DELETE BAND", id: 2}
      return { bands: state.bands.filter(band => band.id !== action.id) }
    default:
      return state;
  }
};
