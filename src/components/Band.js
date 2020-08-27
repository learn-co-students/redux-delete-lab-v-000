// STEP 1: Set up the new Band component that is in charge of displaying the information 
        // for a single band.
// This component will handle the rendering of all `Band` components from a list of bands 
  // provided as props.

import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
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
