import React, { Component } from 'react';

class Band extends Component {

  handleClick(e) {
    e.preventDefault()
    console.log(this.props.id)
    this.props.store.dispatch({ type: 'DELETE_BAND', id: this.props.band.id })
  }

  render() {
    return(
      <li>
        {this.props.band.text}
        <button onClick={(event) => this.handleClick(event)}>Delete Me!</button>
      </li>
    );
  }
};

export default Band;
