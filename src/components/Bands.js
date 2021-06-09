import React from 'react'

import Band from './Band'

class Bands extends React.Component{
    renderBands = ()=>{
        return this.props.bands.map(
            band=><Band key={band.id} band={band}/>
        )
    }
    render(){
        return(
            <ul>
                {this.renderBands()}
            </ul>
        )
    }
}
export default Bands;