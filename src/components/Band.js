import React, { Component } from 'react';

const Band = props => {
  // debugger
  return (
    <div>
      <li>
        <span>{props.band.bandName} </span>
        <button onClick={() => props.delete(props.band.id)}>DELETE</button>
      </li>
    </div>
  )
}
export default Band;
