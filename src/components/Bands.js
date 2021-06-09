import React from 'react'

import Band from './Band'

const Bands = (props)=>{

    const renderBands = ()=>props.bands.map(band=><Band delete={props.deleteBand} key={band.id} band={band}/>)

    return(
        <ul>
            {renderBands()}
        </ul>
    )
}
export default Bands;