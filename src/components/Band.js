import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <React.Fragment>
        <li>{this.props.band.name}<button onClick={() => this.props.deleteBand(this.props.band.id)}>DELETE</button></li>
      </React.Fragment>
    );
  }
};

export default Band;
