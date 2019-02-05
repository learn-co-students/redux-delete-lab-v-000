import React from 'react';

const Band = props => {
  return (
    <div>
      <li>{props.band.name}</li>
      <button onClick={() => props.deleteBand(props.band.id)}>
        delete
      </button>
    </div>
  )
}

export default Band;
