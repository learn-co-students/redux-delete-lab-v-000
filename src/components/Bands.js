import React from 'react'
import Band from './Band'

const Bands = props => {   //props come from the BandsContainer.  bands & deleteBand. Need to pass
                            //them on to Band to be displayed

    //basic format from form lab. need to adjust to pass props to band
  //const bands = props.bands.map((band, index) => {
   // return <li key={index}>{band.name}</li>
 // })
 
 //need to pass bands & deleteBand props on to Band to be displayed. Use spread operator to pass all props 
 //instead of listing them all.
  const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand} />)

  return (
    <div>
      <h3>Bands</h3>
      {bands}
    </div>
  )
}

export default Bands


