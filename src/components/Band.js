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
      <div>
        <li>{this.props.band.text}</li>
        <button onClick={(event) => this.handleClick(event)}>Delete band</button>
      </div>
    );
  }
};

export default Band;
