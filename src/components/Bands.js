import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {
    return(
      <ul>
        Bands Component
        {this.props.store.getState().bands.map((band, index) => {
          return <Band band={band} key={index} store={this.props.store}/>
        })}
      </ul>
    );
  }
};

export default Bands;
