import React, { Component } from 'react'
import Band from './Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map((band, id) => <Band delete={this.props.delete} key={id} band={band} />)
  } 

  render() {
    return (
      <div>
        {this.renderBands()}
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
    delete: bandText => dispatch({type: 'DELETE_BAND', payload: bandText })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
