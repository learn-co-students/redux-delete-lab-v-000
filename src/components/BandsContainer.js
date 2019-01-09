import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands'
import { addBand, deleteBand } from '../actions/bands'

import { connect } from 'react-redux'

class BandsContainer extends Component {


  render() {
    const {bands, addBand, deleteBand} = this.props
    return (
      <div>
        <BandInput addBand={addBand}/>
        <Bands bands={bands} deleteBand={deleteBand}/> 
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: name => dispatch({type: 'ADD_BAND', name}), 
//     deleteBand: id => dispatch({type: 'DELETE_BAND', id})
//   }
// }

export default connect(mapStateToProps, { addBand, deleteBand })(BandsContainer)
