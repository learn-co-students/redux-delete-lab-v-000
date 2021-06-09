import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.props.band.bandName}</li>
      </div>
    );
  }
};

export default Band;
