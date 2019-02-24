import React from 'react'
import {Band} from './Band'

export const Bands = (props) =>{
  console.log(props)
  const renderBands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)

  return (
    <ul>{renderBands}</ul>
  )
}
