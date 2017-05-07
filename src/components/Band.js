import React, { Component } from 'react';

class Band extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(ev) {
    ev.preventDefault()
    this.props.store.dispatch({type: 'DELETE_BAND', id: this.props.band.id})
  }

  render() {
    return(
      <div>
        this.props.band.text
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
};

export default Band;
