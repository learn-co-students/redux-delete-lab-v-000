import React from 'react';
import Band from './Band';

const Bands = ({ bands, removeBand }) => {
  return(
    <div>
      <ul>
        {bands.map( band => <Band key={band.id} band={band} removeBand={removeBand}/>)}
      </ul>
    </div>
  )
}

export default Bands;
