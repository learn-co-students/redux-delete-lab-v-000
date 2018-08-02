import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.dispatch({type: "DELETE_BAND", id: this.props.id})
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleOnClick}>
          Delete
        </button>
      </div>
    )
  }
};

export default Band;
