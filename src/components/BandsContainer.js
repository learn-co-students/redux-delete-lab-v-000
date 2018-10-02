import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {

	renderBands = () => this.props.bands.map(band => <Band key={band.id} band={band} delete={this.props.delete} />)

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
  addBand: formData => dispatch({ type: "ADD_BAND", formData }),
  delete: id => dispatch({ type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
