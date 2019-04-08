import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {

renderBands = () => this.props.bands.map((band, id) => <Band delete={this.props.deleteBand} key={band.id} band={band} />)

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} deleteBand={this.props.deleteBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", payload: name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", payload: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
