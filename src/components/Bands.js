import React, { Component } from 'react';
import Band from './Band.js'

class Bands extends Component {
  render() {
    const bands = this.props.store.getState().bands.map((band, index) =><Band band={band} key={index} store={this.props.store}/>)
    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
