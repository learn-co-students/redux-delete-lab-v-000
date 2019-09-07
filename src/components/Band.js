import React from 'react';

const Band = props => {

  console.log('in Band - props.band', props.band);

  return (
    <div>
      <li>{props.band.bandName}<button onClick={() => props.delete(props.band.id)}>DELETE</button></li>
    </div >
  )
}



export default Band;
