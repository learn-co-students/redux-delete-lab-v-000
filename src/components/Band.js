import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        {this.props.band.name} <button onClick={() => this.props.delete(this.props.band.id)}>X</button>
      </div>
    );
  }
};

export default Band;
