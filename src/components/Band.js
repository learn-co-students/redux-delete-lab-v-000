import React from 'react';

const Band = props => {

  console.log('in Band', props);

  return (
    <div>
      <li>{props.band.bandName}</li>
    </div>
  )
}



export default Band;
