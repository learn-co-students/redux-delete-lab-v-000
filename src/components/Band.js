import React from 'react';

const Band = props => {
  return (
    <li key={props.band.id}>
      <div>{props.band.name}</div><button onClick={() => props.deleteBand(props.band.id)}>DELETE</button>
    </li>
  );
};

export default Band;
