import React, { Component } from 'react';
import Band from './Band';


class Bands extends Component {

  bandz = () => {
    return this.props.bands.map((band, idx) =>
      <Band name={ band.name } key={ idx } id={ band.id } deleteBand={ this.props.deleteBand }/>
    )
  }

  render() {
    return(
      <div>
        <ul>
        { this.bandz() }
        </ul>
      </div>
    );
  }
};

export default Bands;
