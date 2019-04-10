import React, { Component } from 'react'
import BandInput from './BandInput'
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map(
    band => <Band key={band.id} {...band} delete={this.props.delete} />
  )

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => {
  return {
    addBand: name => dispatch({ type: "ADD_BAND", payload: name }),
    delete: bandId => dispatch({ type: "DELETE_BAND", payload: bandId })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
