import React, { Component } from 'react';

class Band extends Component {

  handleClick() {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }

  render() {
    return(
      <li>
        {this.props.band.text}
        <button onClick={() => this.handleClick()} >Delete Band</button>
      </li>
    );
  }
};

export default Band;
