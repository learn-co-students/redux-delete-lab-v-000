import React, { Component } from 'react';

class Band extends Component {

  render() {
    console.log(this.props.id)
    return(
      <div>
        <li>{this.props.text}</li>
        <button onClick={() => this.props.delete(this.props.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;

// //  bands: [
//     { id: 1, text: 'The Legendary Pink Dots' },
//     { id: 2, text: 'The Castanets' },
//     { id: 3, text: 'Cool Runnings' }
//   ]
