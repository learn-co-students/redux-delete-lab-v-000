import React, { Component } from 'react';

class Band extends Component {
  render() {
    return(
        <li>{this.props.band.text}</li>
    );
  }
};

export default Band;
