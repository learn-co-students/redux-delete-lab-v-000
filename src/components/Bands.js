import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
  renderBandLis = () => {
    return this.props.bands.map(band => <Band key={band.id} band={band} deleteBand={this.props.deleteBand} />)
  }
  
  render() {
    return (
      this.renderBandLis()
    )
  }
}

export default Bands;