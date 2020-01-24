import React, {Component} from 'react';
import Band from './Band'

export default class Bands extends Component {
  renderBands = () => {
    return this.props.bands.map( (band) => <Band key={band.id} band={band} delete={this.props.delete} />)
  }
  render() {
    return (
      <div>{this.renderBands()}</div>
    )
  }
}
