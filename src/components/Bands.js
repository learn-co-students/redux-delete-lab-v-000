import React from 'react'
import Band from './Band'

const Bands = (props) =>{
    console.log(props)
    const bands = props.bands.map((band) => <Band deleteBand={props.deleteBand} key={band.id} name={band.name} id={band.id} />)
    return (
        <div>
            { bands }
        </div>
)
}
export default Bands