import React from 'react';

const Band = ({band, deleteBand}) => {
  return (
    <li>
      {band.name} <button onClick={() => deleteBand(band.id)}>DELETE</button>
    </li>
  )
}

export default Band;
