import React from 'react';
import Band from './Band'

const Bands = props => {

    const renderBands = props.bands.map(band => <Band key={band.id} band={band} removeBand={props.removeBand}/>)
    return(
      <div>
        <ul>
          {renderBands}
        </ul>
      </div>
    )
}

export default Bands;