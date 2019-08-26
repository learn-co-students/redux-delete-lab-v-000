import React, { Component } from 'react';

class Band extends Component {
  render() {
    return(
      <div>
        <span><li>{this.props.band.name}</li></span><button onClick={() => this.props.delete(this.props.band.id)}>DELETE</button>
      </div>
    );
  };
};

export default Band;