import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  renderBands = () => this.props.bands.map((band) => <Band band={band} deleteBand={this.props.deleteBand} />)

  render() {
    return(
      <div>
        {this.renderBands()}
      </div>
    )
  }
}

export default Bands;
