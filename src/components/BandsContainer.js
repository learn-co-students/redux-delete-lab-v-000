import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from '../components/Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map((band, id) => <Band key={id} band={band} delete={this.props.delete} />)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: bandName => dispatch({ type: "ADD_BAND", bandName }),
  delete: id => dispatch({ type: 'DELETE_BAND', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
