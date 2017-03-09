import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().bands.map((band, index) => {
          return <Band key={index} text={band.text} id={band.id} store={this.props.store} />
        })}
      </ul>
    );
  }
};

export default Bands;
