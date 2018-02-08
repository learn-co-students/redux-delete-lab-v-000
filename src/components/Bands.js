import React, { Component } from 'react';
import Band from './Band'; //version where I turn Band into component


class Bands extends Component {
  render() {
    const bands = this.props.store.getState().bands.map((band, index) => {
      // debugger;
      return <Band key={index} band={band} store={this.props.store} />
    })
    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
