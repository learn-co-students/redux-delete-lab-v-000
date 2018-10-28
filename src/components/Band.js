import React, { Component } from 'react';

const Band = props => {
    return(
      <div>
      	<ul>
     		 <span>{props.band.bandName}</span><button onClick={() => props.delete(props.band.id)}>DELETE</button>
      	</ul>
      </div>
   );
}

export default Band;
