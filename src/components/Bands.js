import React, { Component } from 'react';
import Band from './Band';

export default class Bands extends Component {
  render() {
    return (
      <div>
        <h3>Bands:</h3>
        {this.props.bands.map(band => <Band key={band.id} band={band} deleteBand={this.props.deleteBand} />)}
      </div>
    )
  }
}