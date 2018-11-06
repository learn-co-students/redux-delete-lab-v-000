import React, { Component } from 'react';
import BandsContainer from './components/BandsContainer'
import BandInput from './components/BandInput'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BandInput />
        <BandsContainer />

      </div>
    );
  }
};

export default App;
