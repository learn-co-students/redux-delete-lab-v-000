import React, { Component } from 'react';

const Band = (props)=>{
    return(
      <div>
            <li>
                <span>{props.band.name}</span>
                <button onClick={(ev)=>props.delete(props.band.id)}>DELETE</button>
            </li>
      </div>
    );
};

export default Band;
