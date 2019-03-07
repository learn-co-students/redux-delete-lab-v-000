import React, { Component } from 'react';

class Band extends Component {

  render() {
    const name = this.props.band.name
    const band = this.props.band

    return(
      <li>
        {name} <button onClick={e => this.props.removeBand(band.id)}>&times;</button>
      </li>
    );
  }
};

export default Band;
