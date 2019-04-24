import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <span>{props.band.name}</span>
        <button onClick={() => props.delete(props.band.id)}>Delete</button>
      </div>
    );
  }
};

export default Band;
