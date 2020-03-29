import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = event => {
    this.props.removeBand(this.props.id)
  }

  render() {
    return(
      <li>
        {this.props.name}
        <button onClick={this.handleOnClick}></button>
      </li>
    );
  }
};

export default Band;
