import React from 'react';
import Band from './Band'

const Bands = props => {
  const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)
  debugger
  return (
    
    <div>
      {bands}
    </div>
  );

};

export default Bands;


// const Bands = ({ bands, deleteBand }) => {
//     return (
//         <div>
//             {bands.map(band => <Band key={band.id} band={band} deleteBand={deleteBand}/>)}
//         </div>
        
//     )
// }