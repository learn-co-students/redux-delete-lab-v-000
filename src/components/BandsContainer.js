import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map(band => <Band key={band.id} name={band.name} id={band.id} removeBand={this.props.removeBand}/>)

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  removeBand: bandId => dispatch({ type: "DELETE_BAND", id: bandId })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
