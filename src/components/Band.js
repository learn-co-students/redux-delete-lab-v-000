import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>
          <span>{this.props.band}</span>
          <button onClick={() => this.props.delete(this.props.band.id)}>Gwar</button>
        </li>
      </div>
    );
  }
};

export default Band;