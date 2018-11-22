import React, { Component } from 'react';

const Band = props => {
//debugger
    return(
      <li>
       <span>{props.band.name} </span><button onClick={() => props.delete(props.band.id)}>DELETE</button>
      </li>
    );
};

export default Band;
