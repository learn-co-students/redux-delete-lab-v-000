import React, { Component } from 'react';
import BandInput from './components/BandInput.js';
import Bands from './components/Bands.js';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <BandInput store={this.props.store} />
        <Bands store={this.props.store} />
      </div>
    );
  }
};
