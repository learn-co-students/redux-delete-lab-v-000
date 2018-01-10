import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = (e) => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    });
  }

  render() {
    return(
      <li>Name: {this.props.band.text} id: {this.props.band.id}
        <button value='X' onClick={this.handleOnClick} />
      </li>
    );
  }
};

export default Band;
