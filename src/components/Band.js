import React, { Component } from 'react';

//class Band extends Component {
//
  const Band = props => {

    return(
      <div>
      <li>{props.band.name}</li><button onClick={() => props.delete(props.band.id)}>DELETE</button>
      </div>
    );
  }



export default Band;
