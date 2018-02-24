import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id,
    });
  }

  render() {

    return (
      <li>
        {this.props.band.text}<br></br>
        <button onClick={this.handleOnClick.bind(this)}>Delete Band</button>
      </li>
    );
  }
};

export default Band;
