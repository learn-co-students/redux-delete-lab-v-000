import React from 'react';

const Band = props => {
  return (
    <div>
      <span>{props.band.bandName}</span><button onClick={() => props.delete(props.band.id)}>DELETE</button>
    </div>
  )
}

export default Band;