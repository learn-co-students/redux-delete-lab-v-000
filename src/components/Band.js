import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <span><li>{this.props.band.name}</li></span>
        <button onClick={() => this.props.delete(this.props.band.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
