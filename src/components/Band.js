import React, { Component } from 'react';
import { connect } from 'react-redux';

class Band extends Component {

  render() {

      let band = this.props.band;
    return(
      <div>
        <li>{band.name}</li>
        <button onClick={() => this.props.delete(this.props.band.id)}>DELETE</button>
      </div>
    );
  }
};





export default Band;
