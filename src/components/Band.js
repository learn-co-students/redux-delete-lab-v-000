import React from 'react'

const Band = props => {
  return(
    <div>
      <li>{props.band.name}</li>
      <button onClick={() => props.deleteBand(props.band.id)}>DELETE</button>
    </div>
  )
}

export default Band
