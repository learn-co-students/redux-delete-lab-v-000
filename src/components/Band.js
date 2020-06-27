import React from 'react';

const Band = props => {

  return(
    <div>
      <li>{props.band.name}<button onClick={() => props.deleteBand(props.band.id)}>DELETE</button></li>
    </div>
  );

};

export default Band;
