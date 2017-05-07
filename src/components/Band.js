import React, { Component } from 'react';

class Band extends Component {
  handleClick() {
    this.props.store.dispatch({
      type: "DELETE_BAND",
      id: this.props.band.id
    })
  }
  render() {
    return(
      <div>
        <li className='band'>{this.props.band.text} <button onClick={() => this.handleClick()}>Delete Band</button></li>
      </div>
    );
  }
};

export default Band;
