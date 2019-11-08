import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'
import Band from './Band'
// import { throws } from 'assert';

class Bands extends Component {

  renderBands = () => {
    // debugger
    if (this.props.bands && this.props.bands.map) {
    return   this.props.bands.map(band => < Band delete={this.props.deleteBand} key={band.id} band={band} />)
    }
  }
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
          {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type:"DELETE_BAND", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(Bands)
