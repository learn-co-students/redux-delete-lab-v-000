import React, { Component } from 'react';

class Band extends Component {

  render() {
    return (
      <div>
        <ul>
          <li>{this.props.band.text}</li>
        </ul>
      </div>
    )
  }

};

export default Band;
