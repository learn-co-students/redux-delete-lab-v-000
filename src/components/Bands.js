import React from 'react'
import Band from './Band'

const Bands = props => {
    const bands = props.bands.map((band) => < Band key={band.id} deleteBand={props.deleteBand} band={band} />)

    return (
        <div>
          {bands}
        </div>
      );

}


export default Bands;
