import React, { Component } from 'react';

class Bands extends Component {
  render() {

    const bands = this.props.store.getState().bands.map((band, index) => {
      return <li key={index} band={band}>{band.text}</li>
    })
    return (
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;



// render() {

//   const todos = this.props.store.getState().todos.map((todo, index) => {
//     return <Todo text={todo.text} key={index} store={this.props.store} /* <- code change */ />
//   });

//   return (
//     <ul>
//       {todos}
//     </ul>
//   );
// }
// };
