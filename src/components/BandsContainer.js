import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    const bands = this.props.bands.map(band => <Band bandName={band.name} id={band.id}/>)
    console.log(bands)
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {bands}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
