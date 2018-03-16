import React, { Component } from 'react';
import Band from './Band';


class Bands extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().bands.map((band, i) => {
          console.log(band);
          console.log("HERREEE")
          return <Band key={i} store={this.props.store} band={band}/>
        })}
      </ul>
    );
  }
};

export default Bands;
