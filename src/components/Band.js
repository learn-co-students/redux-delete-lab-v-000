import React, { Component } from 'react';

class Band extends Component {
  deleteBand() {
    let id = this.props.band.id
    this.props.deleteBand(id)
  }

  render() {
    return(
      <li>
        <p>{this.props.band.name}</p>
        <button onClick={this.deleteBand.bind(this)}>
          Delete Band
        </button>
      </li>

    );
  }
};

export default Band;
