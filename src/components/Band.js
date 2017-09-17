import React, { Component } from 'react';

class Band extends Component {
  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }
  render() {
    return(
      <div>
        <li>
          <p>Name: {this.props.band.text}</p>
          <p>Number: {this.props.band.id}</p>
        </li>

        <button onClick={()=>this.handleOnClick()}>Delete Band</button>
      </div>
    );
  }
};

export default Band;
