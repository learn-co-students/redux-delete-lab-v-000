import React, { Component } from 'react';

class Band extends Component {


  render() {
    return(
      <div>
        <li><span>{this.props.band.name}</span><button onClick={() => this.props.deleteBand(this.props.band.id)}>DELETE</button></li>
      </div>
    );
  }
};

export default Band
