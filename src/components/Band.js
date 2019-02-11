import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li> {this.props.band.name} <button onClick={() => this.props.delete(this.props.band.id)}>X</button></li>
    );
  }
};

export default Band;
