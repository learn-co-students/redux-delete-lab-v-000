
export default function manageBand(state = {
  bands: []
}, action) {

  switch (action.type) {

    case 'ADD_BAND':
    const band = {
      id: Math.random()*10000000000000000,
      name: action.name
    };
      return { bands: state.bands.concat(band) }

    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id);
      return { bands };
      
    default:
      return state;
  }
};





    // case 'ADD_TODO':

    //   const todo = {
    //     id: Math.random()*10000000000000000,
    //     text: action.payload.text
    //   }
    //   return { todos: state.todos.concat(todo) };

    // case 'DELETE_TODO':

    //   return {todos: state.todos.filter(todo => todo.id !== action.payload)}

