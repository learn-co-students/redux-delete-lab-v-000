import React from 'react'


const Band = props => {
	    	console.log(props.band.name)
    return(
      <div>
        Band Component
        <li>{props.band.name}</li><button onClick={() => props.delete(props.band.id)}>DELETE_BAND</button>
      </div>     
    );
  }

export default Band;
