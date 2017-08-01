import React, { Component } from 'react';
import Band from './Band.js';

class Bands extends Component {
  render() {

    var bands = this.props.store.getState().bands.map((band,index) => {
      return <Band band={band}
        store={this.props.store}
        key={index}/>
    })

    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
