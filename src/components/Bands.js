import React, { Component } from 'react';
import Band from './Band'

const Bands = props => {

    
  
    const bands = props.bands.map((band, index) => <Band key={index} band={band} deleteBand={props.deleteBand}/>)
    
      return (
          <div>
              {bands}
          </div>
      )

};

export default Bands;