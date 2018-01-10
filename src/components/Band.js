import React, { Component } from 'react';

class Band extends Component {

  handleClick(e){
    e.preventDefault();
    this.props.store.dispatch({ type: 'DELETE_BAND', id: this.props.band.id })
  }
  render() {
    return(
      <div>
        <li> { this.props.band.text } <button onClick={(e) => {this.handleClick(e)}}> Delete </button> </li>
      </div>
    );
  }
};

export default Band;
