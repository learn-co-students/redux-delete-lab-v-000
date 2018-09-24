import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
      
    
        <li>{this.props.band.name} - {this.props.band.id}</li>
        <button onClick={() => this.props.delete(this.props.band.id)}>Delete</button>

      </div>
    );
  }
};

export default Band;
