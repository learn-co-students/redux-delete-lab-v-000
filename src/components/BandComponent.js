import React from 'react'

const BandComponent = props => {
  return (
    <div>
      {props.band.bandName}
      <button
      onClick={props.addBand(props.band.name)}>Add Band</button>
      <button onClick={props.deleteBand(props.band.id)}>Delete</button>
    </div>
  )
}

export default BandComponent
