import React from 'react'
import Band from './Band'

const Bands = (props) => {

    const allbands = props.bands.map(band => <Band key={band.id} band={band} delete={props.delete}/>)

    return (
        <div>
            {allbands}
        </div>
    )

}

export default Bands