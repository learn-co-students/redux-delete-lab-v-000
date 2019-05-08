import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>{this.props.bandName} 
        <button type="button" onClick={() => this.props.deleteOnClick(this.props.bandId)} >
          Delete
        </button>
      </li>
      );
    }
  };
  
  export default Band;
  