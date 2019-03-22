import React, { Component } from 'react';

class Band extends Component {
  render() {
    return (
      <li>
        <span>{this.props.bandName}</span>
        <button onClick={() => this.props.delete(this.props.id)}>DELETE</button>
      </li>
    )
  }
}

export default Band;
