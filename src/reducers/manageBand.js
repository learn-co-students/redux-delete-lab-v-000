export default function manageBand(state = {
  bands: []
}, action) {
  console.log('manageBand Reducer', action)
  let band
  switch (action.type) {
    case 'ADD_BAND':
      band = {
        id: Math.random() * 10000000000000000,
        bandName: action.bandName
      }
      return { ...state, bands: [...state.bands, band] }

    default:
      return state;
  }
};
// return { todos: state.todos.concat(action.payload.text) };

// const todo = {
//   id: Math.random()*10000000000000000,
//   text: action.payload.text
// }
// return { todos: state.todos.concat(todo) };