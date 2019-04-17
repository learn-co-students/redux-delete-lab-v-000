import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        <p>{this.props.name}</p>
        <button onClick={() => this.props.delete(this.props.id)}>DELETE</button>
      </li>
    );
  }
};

export default Band;
