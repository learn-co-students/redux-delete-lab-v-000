let id = 0

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++
      const band = Object.assign({}, action.band, {id: id})
      // return { bands: state.bands.concat(action.band) }
      return { bands: state.bands.concat(band) }
    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id)
      return {bands}
    default:
      return state;
  }
};
// let id = 0;
//
// export default function manageTodo(state = {
//  todos: []
// }, action) {
//  switch (action.type) {
//    case 'ADD_TODO':
//      id++;
//      const todo = Object.assign({}, action.todo, { id: id });
//      return { todos: state.todos.concat(todo) };
//    case 'DELETE_TODO':
//      const todos = state.todos.filter(todo => todo.id !== action.id);
//      return  { todos }
//    default:
//      return state;
//  }
// };
