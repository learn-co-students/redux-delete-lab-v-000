import React, { Component } from 'react';

class Band extends Component {

  handleChange = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
        type: 'DELETE_BAND',
        id: this.props.band.id,
      })
  }


  render() {
    return(
      <div>
        <li> {this.props.band.text} </li>
        <button onClick={this.handleChange}> Delete a band </button>
      </div>
    );
  }
};

export default Band;
