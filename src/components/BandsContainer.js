import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band.js';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} />)
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
  // careful with specifying the params of dispatch: here, id will correspond to action.id, to be set to the argument of delete
  delete: id => dispatch({type: 'DELETE_BAND', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
