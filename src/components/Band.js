import React, { Component } from 'react';

class Band extends Component {

  handleClick = (event) => {
    this.props.store.dispatch({type: 'DELETE_BAND', id: this.props.band.id})
  }

  render() {
    return(
      <li>
        {this.props.band.text}
        <button onClick={(event) => this.handleClick(event)}>
          X
        </button>
      </li>
    );
  }
};

export default Band;
