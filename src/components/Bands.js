import React from 'react';
import Band from './Band'
  const Bands = (props) => {
    debugger   
    const displayBands = props.bands.map((band) => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)
      return(
        <div>
          {displayBands}
        </div>
      );
  };
  

  export default Bands;