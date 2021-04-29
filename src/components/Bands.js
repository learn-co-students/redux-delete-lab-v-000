import React from 'react';
import Band from './Band';
const Bands = (props) => {
  return (
    <div>
      {props.bands.map((band, i)=> <Band band={band} key={i} deleteAction={props.deleteAction}/>)}
    </div>
  );
}

export default Bands;
