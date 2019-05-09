import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.handleOnClick}>Delete</button>
      </li>
    );
  }
};

export default Band;
