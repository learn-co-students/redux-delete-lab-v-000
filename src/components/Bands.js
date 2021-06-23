import React from 'react'
import Band from './Band'

const Bands = props => {
  debugger
  return (
      props.bands.map(band => <Band band={band} delete={props.deleteBand}/>)
  );
};
 
export default Bands;