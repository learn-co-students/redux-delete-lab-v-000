import React from 'react';

const Band = props => {
    return(
      <li>
        {props.band.name}
        <button onClick={() => props.delete(props.band.id)}>Delete</button>
      </li>
    );
};

export default Band;
