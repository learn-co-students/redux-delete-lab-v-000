import React, { Component } from 'react';

const e = React.createElement

class Band extends Component {
  render() {
    return e('li', {}, 
      this.props.band.text,
      e('br'),
      e('button', { onClick: event => this.handleClick(event) }, 'Delete'))
  }

  handleClick(event) {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }
};

export default Band;
