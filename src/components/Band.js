import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.delete(this.props.band.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.band.bandName}</li> 
        <button onClick={this.handleClick}> DELETE </button>
      </div>
    );
  }
}

export default Band;
