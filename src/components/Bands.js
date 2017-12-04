import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

  render() {
    // check to see if getting bands from state is correct
    const bandsArray = this.props.store.getState().bands.map((band, index) => {
      return <Band key={index} band={band} store={this.props.store} />
    })

    return(
      <ul>
        Bands Component
        {bandsArray}
      </ul>
    );
  }
};

export default Bands;
