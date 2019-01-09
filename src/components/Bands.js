import React from 'react';
import Band from './Band'

const Bands = ({bands, deleteBand}) => {
  const renderBands = bands.map(band => 
    <Band key={band.id} band={band} deleteBand={deleteBand} />)

    return (
      <div>
        {renderBands}
      </div>
    )

}
 
export default Bands;