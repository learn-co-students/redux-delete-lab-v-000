import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

  render() {

    const bands = this.props.bands.map((band, index) => {
      return <Band name={band.name} id={band.id} key={index} deleteBand={this.props.deleteBand} />
    });

    return(
      <div>
        {bands}
      </div>
    )
  } 
}

export default Bands;