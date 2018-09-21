import React, { Component } from 'react';

class Band extends Component {
  
  render() {
    
    let band =  <li key={this.props.band.id}>{this.props.band.name}<button onClick={() => this.props.delete(this.props.band.id)}>X</button> </li>
    return(
      <div>
        <ul>
          {band}
        </ul>
      </div>
    );
  }
};

export default Band;
