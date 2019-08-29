import React from 'react';

const Band = props => {
  return (
    <div>
      <br />
      <li>
        <span>{ props.band.name }</span>
        <button onClick={() => props.delete(props.band.id)}>x</button>
      </li>
    </div>
  )
}

export default Band;
