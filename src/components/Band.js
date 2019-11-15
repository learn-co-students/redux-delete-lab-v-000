import React, { Component } from 'react';

class Band extends Component {

  render() {
    debugger;
    return(
      <div>
        <span>{this.props.band.name}</span>
        <button onClick={() => this.props.deleteBand(this.props.band.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
