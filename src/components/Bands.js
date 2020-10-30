// import { render } from 'enzyme'
import React from 'react'
import Band from './Band'
// import {connect} from 'react-redux'

const Bands = props => {

        return(
            <div>
                {props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand} />)}
            </div>
        )
    
}

export default Bands