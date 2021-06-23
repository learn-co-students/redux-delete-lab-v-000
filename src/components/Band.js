import React, { Component } from 'react';

class Band extends Component {

  render() {
    debugger
    return(
      <li>
        <span>{this.props.band.id}: {this.props.band.name}</span><button onClick={() => this.props.delete(this.props.band.id)}>DELETE</button>
    </li>
    );
  }
};

export default Band;
