import React from 'react';
import Band from './Band'

const Bands = props => {
    const bands = props.bands.map((band,index) => {
      return <Band key={index} id={band.id} name={band.name} delete={props.delete}/>;
    });
  
    return (
      <div>
        {bands}
      </div>
    );
  
  };
  
  export default Bands;