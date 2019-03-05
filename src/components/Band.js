import React, { Component } from 'react';

class Band extends Component {

  render() {
    // debugger
    return(
      <li>
        {this.props.band.name}
        <button onClick={ ( ) => this.props.delete( this.props.band.id ) }> DELETE </button>
      </li>
    );
  }
};

export default Band;
