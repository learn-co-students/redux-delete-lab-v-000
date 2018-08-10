import React, { Component } from 'react'
import BandInput from './BandInput';
import { connect } from 'react-redux'
import Band from "../components/Band"

class BandsContainer extends Component {

  renderBands = () =>
  this.props.bands.map((band, id) => <Band delete={this.props.delete} key={band.id} id={band.id} text={band.name} />)

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
  delete: id => dispatch({ type: 'DELETE_BAND', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
