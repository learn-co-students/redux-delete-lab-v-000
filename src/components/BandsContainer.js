import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>                             {/*pass props to BandInput.  addBand*/}
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand}/>  {/*pass props to Bands. bands & deleteBand*/}

      </div>
    )
  }
}


const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),     //can also put these in separate action file
  deleteBand: id => dispatch({ type: 'DELETE_BAND', id })
  
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
