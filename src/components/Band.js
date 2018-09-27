import React, { Component } from 'react';

class Band extends Component {
  constructor(props) {
    super(props)
  }
  handleClick = () => {
    this.props.deleteBand(this.props.band.id)
  }
  render() {
    return(
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={this.handleClick}>DELETE</button>
      </div>
    );
  }
};

export default Band;
