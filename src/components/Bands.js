import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().bands.map((band, index) => {
            return <Band band={band} store={this.props.store} key={index} />
        })}
      </ul>
    );
  }
};

export default Bands;
