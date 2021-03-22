import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

  render() {
    console.log('this.props in Bands:', this.props);

    const bands = this.props.bands.map((band, index) => {
      return <Band text={band.name} key={index} />
    });

    return(
      <div>
        {bands}
      </div>
    )
  } 
}

export default Bands;