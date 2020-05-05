import React, { Component } from 'react';
import Band from './Band'
import BandsContainer from './BandsContainer'


class Bands extends Component {
  render() {
    console.log(this.props)
    const bands = this.props.bands.map((band) => <Band band={band} delete={this.props.delete} />)
    return bands;
  }
}

export default Bands;
