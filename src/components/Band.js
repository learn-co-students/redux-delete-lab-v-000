import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.removeBand(this.props.band.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={this.handleOnClick}>
          Delete
        </button>
      </div>
    )
  }
};

export default Band;