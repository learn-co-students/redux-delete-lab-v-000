import React from 'react';

const Band = props => {
  return (
    <div>
      <li>{props.name}</li>
      <button onClick={() => props.deleteBand(props.id)} >Delete</button>
    </div>
  );
};

export default Band;
