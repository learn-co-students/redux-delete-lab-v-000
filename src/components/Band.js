import React from 'react';

const Band = props => {
    return(
      <div>
        <li>{props.name}</li>
        <button onClick={() => props.deleteBand(props.id)}>DELETE</button>
      </div>
    );
};

export default Band;
