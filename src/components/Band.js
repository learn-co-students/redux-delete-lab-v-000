import React, { Component } from 'react';

class Band extends Component {
  renderBand = () => {
    return this.props.bands.map(b => {
      return (
        <li>{b}</li>
      )
    })
  }

  render() {
    return (
      <div>
        <ol>
        {this.renderBand()}
        </ol>
      </div>
    )
  }

};

export default Band;
