import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';


import { connect } from 'react-redux'

class BandsContainer extends Component {
  
  render() {
    let bands = this.props.bands.map(band =>  <Band band={band} delete={this.props.delete}/>)
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
       {bands}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band }),
  delete: id => dispatch({type: 'DELETE_BAND', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
