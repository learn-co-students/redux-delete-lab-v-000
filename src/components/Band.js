import React, { Component } from 'react';

const Band = props => {
  return (
    <React.Fragment>
      <li>
        <p>{props.band.name}</p>
        <button onClick={() => props.delete(props.band.id)}>DELETE</button>
      </li>
    </React.Fragment>
  )
}

export default Band;
