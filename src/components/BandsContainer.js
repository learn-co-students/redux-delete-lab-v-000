import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {

	generateBands = () => this.props.bands.map(band => <Band delete={this.props.actions.deleteBand} key={band.id} name={band.name} id={band.id}/>)
  render() {
    return (
      <div>
        <BandInput addBand={this.props.actions.addBand}/>
        <ul>
        	{this.generateBands()}
        </ul>

      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
	actions: {
  		addBand: name => dispatch({ type: "ADD_BAND", name }),
  		deleteBand: id => dispatch({type: "DELETE_BAND", id})
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
