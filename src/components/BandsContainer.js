import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'
import { connect } from 'react-redux'


class BandsContainer extends Component {

renderBands = () => {
		return this.props.bands.map( (band, id) => 
		<Band delete={this.props.delete} band={band} id={id}/> ) }

  render() {

    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        { this.renderBands() }
      </div>
    )
  }
}

const mapStateToProps = state => {
	return {
		bands: state.bands
	}
}

const mapDispatchToProps = dispatch => {
	return {
	  addBand: name => dispatch({
	  	type: "ADD_BAND",
	  	name: name
	  }),
	  delete: id => dispatch({
	  	type: 'DELETE_BAND', 
	  	id: id})	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
