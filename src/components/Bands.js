import React, { Component } from 'react'
// import BandsContainer from './BandsContainer';
import Band from './Band'
// import { connect } from 'react-redux'

const Bands = props =>{

  const renderBands = props.bands.map((band) => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)

    return(
    <ul>
      {renderBands}
    </ul>
    )
}
export default Bands
