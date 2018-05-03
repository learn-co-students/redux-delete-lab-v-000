import React, { Component } from 'react';

class Band extends Component {
  render() {
    return(
      <div>
        band component
        <li key={this.props.band.id}>{this.props.band.text}</li>
      </div>
    );
  }
};

export default Band;
