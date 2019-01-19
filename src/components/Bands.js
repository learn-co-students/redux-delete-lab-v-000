import React, { Component } from 'react';
import Band from './Band'

const Bands = (props) => {
  const bands = props.bands.map(band => <Band key={band.id} {...band} delete={props.delete}/>)
  return(
    <div>
      {bands}
    </div>
  );

}

export default Bands;
