import React, { Component } from 'react';

class Band extends Component {

  render() {
    const band = this.props.band
    
    return(
      <div>
        <li>
          {band.name}
          <button onClick={() => this.props.delete(band.id)}>Delete</button>
        </li>
      </div>
    );
  }
};

export default Band;
