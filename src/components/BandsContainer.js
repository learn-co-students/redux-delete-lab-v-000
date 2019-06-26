import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band) => <Band key={band.id} band={band} delete={this.props.delete} />)

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <div>{this.renderBands()}</div>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: band => dispatch({type: 'DELETE_BAND', id: band.id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
