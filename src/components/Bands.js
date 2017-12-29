import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
  render() {
    const bands = this.props.store
      .getState()
      .bands.map((band, index) => (
        <Band band={band} store={this.props.store} key={index} />
      ));
    return <ul>{bands}</ul>;
  }
}

export default Bands;
