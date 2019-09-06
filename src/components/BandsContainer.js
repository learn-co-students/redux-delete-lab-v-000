import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from '../components/Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => {
    this.props.bands.map((band, id) => <Band key={id} bandName={band} />)
  }
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

const mapDispatchToProps = dispatch => ({
  bandName: bands => dispatch({ type: "ADD_BAND", bands })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
