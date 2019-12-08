import React from 'react'


const Band = props => {
    return(
      <div>
        Band Component
        <li key={props.band.id}>{props.band.name}</li><button onClick={() => props.delete(props.band.id)}>DELETE_BAND</button>
      </div>     
    );
  }

export default Band;
