import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.props.name}</li><button onClick={() => this.props.deleteBand(this.props.id)}>DELETE</button>
      </div>      
    );
  }
};

export default Band;




// import React from 'react'

// const Todo = props => {
//   console.log(props);
//   return (
//     <div>
//       <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
//     </div>
//   )
// }

// export default Todo;