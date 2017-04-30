import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {
    const bandsList = this.props.store.getState().bands.map((band, index) => {
      return <Band band={band} key={index} store={this.props.store} /> 
    })
    return(
      <ul>
        {bandsList}
      </ul>
    );
  }
};

export default Bands;
