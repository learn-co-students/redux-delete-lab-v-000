import React from 'react'

const Band = props => {

  return(
    <div>
      <li>{props.band.name}</li>
      <span>
      	<button onClick={() => props.delete(props.band.id)}>Delete Band</button>
      </span>
    </div>
  );
}

export default Band;