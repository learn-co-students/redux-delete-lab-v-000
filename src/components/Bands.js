import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
  render() {
    const bands = this.props.store.getState().bands.map((band, index) => {
      return <Band key={index} band={band} id={band.id} store={this.props.store} />
    });

    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
