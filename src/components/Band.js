import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    });
  }

  render() {
    return(
      <div>
        <li key={this.props.band.id}><button onClick={this.handleOnClick}>{this.props.band.text}</button></li>
      </div>
    );
  }
};

export default Band;
