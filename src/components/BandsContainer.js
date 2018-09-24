import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'


class BandsContainer extends Component {



  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
        {this.props.bands.map(band => <Band key={band.id} band={band} delete={this.props.delete} /> )}
        </ul>
      </div>
    )
  }
}

// const mapStateToProps = ({ bands }) => ({ bands })
const mapStateToProps = state => {
	return {bands: state.bands}
}

const mapDispatchToProps = dispatch => (
{addBand: name => dispatch({ type: "ADD_BAND", name: name }),
	delete: id => dispatch({type: "DELETE_BAND", id: id})
	}
)

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
