import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {
  render(){
    return(
      <ul>
        {this.props.store.getState().bands.map(band => <Band key={band.id} id={band.id} text={band.text} store={this.props.store}/>)}
      </ul>
    )
  }
}

export default Bands;
