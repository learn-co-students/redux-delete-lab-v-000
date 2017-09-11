import React, { Component } from 'react';

class Band extends Component {
  deleteBand = id => {
    this.props.store.dispatch({type: "DELETE_BAND", id: id})
  }

  render() {
    return(
      <div>
        <li>{this.props.band.text}</li>
        <button onClick={event => this.deleteBand.call(this, this.props.band.id)}>Delete Band</button>
      </div>
    );
  }
};

export default Band;
