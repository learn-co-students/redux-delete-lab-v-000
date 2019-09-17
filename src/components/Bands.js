import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
  renderBandList = () => {
    return this.props.bands.map(band => <Band key={band.id} band={band} deleteBand={this.props.deleteBand} />)
  }
  
  render() {
    return (
      this.renderBandList()
    )
  }
}

export default Bands;