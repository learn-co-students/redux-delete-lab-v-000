import React, { Component } from 'react';
import Band from './Band'

const e = React.createElement

class Bands extends Component {
  render() {
    const bands = this.props.store.getState().bands
    const output = bands.map((band, index) => {
      return e(Band, {
        band, 
        key: index,
        store: this.props.store
      })
    })

    return(
      <ul>
        {output}
      </ul>
    );
  }
};

export default Bands;
