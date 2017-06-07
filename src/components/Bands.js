import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {

    let bands = this.props.store.getState().bands.map((band, idx) =>{
      return <Band band={band} key={idx} store={this.props.store} />
    })

    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
