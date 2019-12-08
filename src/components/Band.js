import React from 'react'


const Band = props => {
	console.log(JSON.stringify(props.band))
    return(
      <div>
        Band Component
        <li>{props.band.text}</li><button onClick={() => props.delete(props.band.id)}>DELETE_BAND</button>
      </div>     
    );
  }

export default Band;
