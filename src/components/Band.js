import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li><span>{this.props.band.name}<button onClick={() => this.props.delete(this.props.band.id)}>Delete</button></span></li>
      </div>
    );
  }
};

export default Band;
