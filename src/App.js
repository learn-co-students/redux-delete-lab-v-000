import React, { Component } from 'react';
import BandInput from './components/BandInput';
import Bands from './components/Bands';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Band Manager</h1>
        <BandInput store={this.props.store} />
        <Bands store={this.props.store} />
      </div>
    );
  }
};
