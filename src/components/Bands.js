import React, { Component } from 'react';
import Band from './Band'

 const Bands = props => {
  const bands = props.bands.map( band => {
            return <Band key={band.id} id={band.id} name={band.name}  deleteBand={props.deleteBand}/>
          })
  return (
    <div>
      {bands}
    </div>
  )
}





 export default Bands;