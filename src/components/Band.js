import React, { Component } from 'react';

class Band extends Component {
  handleClick = () => {
    this.props.delete(this.props.id)
  }

  render() {
    return(
      <li>
        {this.props.name} <button onClick={this.handleClick}>Delete band</button>
      </li>
    );
  }
};

export default Band;
