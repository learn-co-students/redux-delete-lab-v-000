import React, { Component } from 'react';
import BandsContainer from './BandsContainer.js';
import Band from './Band.js';

class Bands extends Component {

  // renderBands = () => this.props.bands.map((band, id) => <Band key={id} text={band}>)

  // <div>{this.renderBands()}</div>
  renderBands = () => {
   return this.props.bands.map(band => <Band delete={this.props.deleteBand} key={band.id} id={band.id}  band={band.name} />)
 }


  render() {
    return(
      <div>{this.renderBands()}</div>
      // <div>{this.renderBands()}</div>

    )
  }


}

export default Bands;
