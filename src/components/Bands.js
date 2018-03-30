import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
  render() {

    const singleBand = this.props.store.getState().bands.map((band, i) =>
      <Band
        store={this.props.store}
        band={band}
        id={band.id} />
    );

    return(
      <ul>
        {singleBand}
      </ul>
    );
  }
}

export default Bands;
