import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }

  render() {
    return(
      <div>
        <li>band component
        <button onClick={this.handleOnClick} />
        {this.props.band.text}</li>
      </div>
    );
  }
};

export default Band;
