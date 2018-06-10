import React, { Component } from 'react';

class Band extends Component {
  constructor(props) {
    super(props);
  }

  handleDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id,
    })
  }
  // do i have to make this an arrow function?

  render() {
    return(
      <div>
        <li id={this.props.band.id}>
          {this.props.band.text}
        </li>
        <button onClick={() => this.handleDelete()}>Delete</button>
      </div>
    );
  }
};

export default Band;


//Luke's solution:

// import React, { Component } from 'react';
//
// class Band extends Component {
//
//   handleOnClick() {
//     this.props.store.dispatch({
//       type: 'DELETE_BAND',
//       id: this.props.band.id
//     });
//   }
//
//   render() {
//     return(
//       <div>
//         <li>{this.props.band.text}</li>
//         <button onClick={() => this.handleOnClick()} >
//           Delete
//         </button>
//       </div>
//     );
//   }
// };
//
// export default Band;
