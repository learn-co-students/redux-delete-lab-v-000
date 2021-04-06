import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = (band) => {
    // console.log(band.id)
    this.props.deleteBand(band.id)
  }

  render() {
    console.log(this.props.bands)
    const bands = this.props.bands.map( band => <li>{band.name}
    <button key={band.id} onClick={() => this.handleOnClick(band)}>Delete</button></li>)

    return(
      <div>
      {bands}
      </div>
    );
  }
};

export default Band;
