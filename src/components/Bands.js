import React, { Component } from 'react';
import Band from './Band.js'

class Bands extends Component {
  render() {
    const bandList = this.props.store.getState().bands.map((band, index) => {
    	return <Band band={band} key={index} id={band.id} store={this.props.store} />
    });

    return(
      <ul>
        { bandList }
      </ul>
    );
  }
}

export default Bands;
