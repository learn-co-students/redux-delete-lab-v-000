import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
  render() {
    const bandLIs = this.props.store.getState().bands.map((band, index) => <Band key={index} band={band} store={this.props.store} />)

    return(
      <ul>
        {bandLIs}
      </ul>
    );
  }
};

export default Bands;
