import React, { Component } from 'react';

class Band extends Component {

  render() {
    // debugger
    return(
        <li>
          <span>{ this.props.band.bandName }</span><button onClick={() => this.props.deleteBand(this.props.band.id)}>DELETE</button>
        </li>
    );
  }
};

export default Band;
