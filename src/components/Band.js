import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={() => this.props.delete(this.props.band.id)}>Delete band</button>
      </div>
    )
  }
};

export default Band;
