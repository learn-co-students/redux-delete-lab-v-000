import React from 'react';
import Band from './Band';



const Bands = props => {
  const renderedBands = props.bands.map(band =>
    <Band key={band.id} {...band} deleteBand={props.deleteBand}/>);

//let renderedBands = bands.map(band => <li><Band key={band.id} band={band}/></li>)

  return (
  <div>
    {renderedBands}
    </div>
)
}
export default Bands;
