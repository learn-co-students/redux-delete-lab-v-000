import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {
    const bandComponents = this.props.store.getState().bands.map(band=> <Band band={band}/>)
    return(
      <ul>
        {bandComponents}
      </ul>
    );
  }
};

export default Bands;
