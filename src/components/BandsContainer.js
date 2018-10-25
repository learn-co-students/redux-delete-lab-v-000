import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBand = () => this.props.bands.map((band, id) => <Band deleteBand={this.props.deleteBand} key={band.id} band={band} />)
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.renderBand()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
