import React, { Component } from 'react';
import Band from './Bands'

class Bands extends Component {
  render() {
    const bands = this.props.store.getState().bands.map((band, index) => <Band store={this.props.store} key={index} name={band.text} id={band.id} />)
    return(
      <ul>
      {bands}
      </ul>
    );
  }
};

export default Bands;
