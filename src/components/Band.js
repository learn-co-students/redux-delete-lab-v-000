import React, { Component } from 'react';

class Band extends Component {
  handleDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    });
  };
  render() {
    return (
      <li style={{ display: 'flex' }}>
        <p>{this.props.band.text}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

export default Band;
