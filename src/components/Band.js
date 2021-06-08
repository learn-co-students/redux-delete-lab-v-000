import React, { Component } from 'react';

class Band extends Component {

  render() {

    const band = this.props.band

    return(
      <div>
        <li>{band.name} ({band.id}) <button onClick={() => this.props.deleteBand(band.id)}>Delete</button></li>
      </div>
    );
  }
};

export default Band;
