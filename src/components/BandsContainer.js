import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map((band) =>
            <Band key={band.id} band={band} deleteBand={this.props.deleteBand}/>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", bandName: name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", bandId: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
