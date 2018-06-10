import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
  render() {

    const bands = this.props.store.getState().bands.map((band, idx) => <Band key={idx} band={band} store={this.props.store}/>)

    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;



// If I create IDs like below by passing in indeces of my array, it solves the problem of resetting all the IDs, but will a new problem be created by not having unique IDs for bands?

// {this.props.store.getState().bands.map((band, idx) => <Band key={idx} band={band.text} />)}
