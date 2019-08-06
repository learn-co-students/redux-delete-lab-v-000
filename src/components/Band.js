import React, { Component } from 'react';

export default class Band extends Component {

  render() {
    return(
      <div>
        <li><span>{this.props.band.name}</span><button onClick={() => this.props.delete(this.props.band.id)}>DELETE</button></li>
      </div>
    );
  }
};
