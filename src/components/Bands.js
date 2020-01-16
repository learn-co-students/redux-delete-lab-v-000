import React, { Component } from 'react'
import Band from './Band';
import uuid from 'uuid'



class Bands extends Component {

  renderBands = () => {

    //return this.props.bands.map(band => <Band key={uuid()} name={band} />)
    //debugger
  }

  render() {

    return (
      <div>
        {this.props.bands.map(band => <Band key={band.id} id={band.id} name={band.name} delete={this.props.delete}/>)}
      </div>
    )
  }
}


export default Bands
