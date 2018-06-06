import React, { Component } from 'react';

class Band extends Component {
  handleOnClick = () => {
    this.props.store.dispatch({
      id: this.props.band.id,
      type: 'DELETE_BAND'
    });
  }

  render() {
    return(
      <li>
        {this.props.band.text}
        <button onClick={this.handleOnClick}>x</button>
      </li>
    );
  }
};

export default Band;
