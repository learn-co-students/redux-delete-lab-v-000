import React from 'react';
import Band from './Band'; 

class Bands extends React.Component {
  render() {
    return(
      <ul>
      { 
        this.props.store.getState().bands.map((band, index) => {
          return <Band key={index} band={band} store={this.props.store}/> 
        })
      } 
      </ul>
    );
  }
};

export default Bands;
