import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {
    const bands = this.props.store.getState().bands.map((band, index) => <Band text={band.text} key={index} store={this.props.store} band={band}/>)
    return(
      <ul>
        <div>
          {bands}
        </div>
      </ul>
    );
  }
};

export default Bands;
