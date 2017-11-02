import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
  render() {
    console.log(this.props.store.getState().bands);
    const bands = this.props.store.getState().bands.map((band) =>{
      return <Band band={band} store={this.props.store}/>
    })
    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
