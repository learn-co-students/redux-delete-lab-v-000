import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {

    const bands = this.props.store.getState().bands.map((band, i) => {
      return <Band key={i} store={this.props.store} band={band} />;
    });

    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
