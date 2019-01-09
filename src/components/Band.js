import React, { Component } from 'react';

class Band extends Component {

  render() {

    const {band, deleteBand} = this.props
    return(
      <div>
        <li>{band.name}</li>
        <button onClick={() => deleteBand(band.id)}>DELETE</button>
      </div>
    );
  }
};
 
export default Band;
