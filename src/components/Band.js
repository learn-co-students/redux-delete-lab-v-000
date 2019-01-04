import React, { Component } from 'react';

class Band extends Component {

  handleClick(event) {
    this.props.deleteBand(this.props.band.id);
  }

  render() {
    return(
      <div key={this.props.band.id}>
        <li>{this.props.band.name}</li>
        <button onClick={(event) => this.handleClick(event)}>Delete</button>
      </div>
    );
  }
};

export default Band;
