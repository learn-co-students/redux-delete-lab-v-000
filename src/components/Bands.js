import React from 'react';
import Band from './Band';

const Bands = props => {
  const bands = props.bands.map(band => <Band delete={props.delete} key={band.id} {...band} />)

  return (
    <div>
      {bands}
    </div>
  )
}

export default Bands;
