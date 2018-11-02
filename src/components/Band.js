import React from 'react'

const Band = props => {
  return (
    <li>{props.name}<button onClick={() => props.delete(props.id)}>DELETE</button></li>
  );
};

export default Band;
