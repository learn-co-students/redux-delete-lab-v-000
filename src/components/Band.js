import React, { Component } from 'react';

class Band extends Component {

  render() {

    const { band } = this.props;

    return(
      <div>
        <li key={band.id}>{band.name}</li><button onClick={() => this.props.delete(band.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
