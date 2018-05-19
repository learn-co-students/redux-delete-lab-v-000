import React, { Component } from 'react';

class Band extends Component {
  handleClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id,
    })
  }
  render() {
    return(
      <li>
        <button onClick={this.handleClick}>{this.props.band.text}</button>
      </li>
    );
  }
};

export default Band;
