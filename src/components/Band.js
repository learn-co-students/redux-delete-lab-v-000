import React from 'react';

const Band = props => {

    return(
      <div>
        <ul>
          <li key={props.band.id}>
            {props.band.name}
          </li>
        </ul>

        <button onClick={() => props.delete(props.band.id)}>DELETE BAND</button>
      </div>
    );
  }



export default Band;
