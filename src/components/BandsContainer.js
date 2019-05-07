import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands() {
    return(
      <ul>
        {this.props.bands.map(band => {
          return(
            <Band key={band.id} name={band.name} id={band.id} delete={this.props.delete} />
          )
        })}
      </ul>
    )
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
  delete: id => dispatch({type: "DELETE_BAND", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
