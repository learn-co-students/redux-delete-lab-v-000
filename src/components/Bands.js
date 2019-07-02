import React from 'react'
import Band from './Band'

const Bands = props => {
  const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)

  return (
    <div>
      <h3>Bands:</h3>
      {bands}
    </div>
  )
}

export default Bands
