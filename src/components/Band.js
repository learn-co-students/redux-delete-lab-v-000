import React, { Component } from 'react';

class Band extends Component {

  handleClick = function () {
    this.props.store.dispatch({type: 'DELETE_BAND', id: this.props.band.id})
  }.bind(this);

  render() {
    return(
      <li>
          {this.props.band.text}
          <button id={this.props.band.id} onClick={this.handleClick}>Delete</button>
      </li>
    );
  }
};

export default Band;
