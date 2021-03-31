import React, { Component } from 'react'
import Band from './Band'
import { connect } from 'react-redux'

class Bands extends Component {
    renderBands = () => {
        return this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} name={band.name} />)
      }

    render() {
      return (
        <div>
          {this.renderBands()}
        </div>
      )
    }
  }

const mapStateToProps = ({ bands }) => ({ bands })

export default connect(mapStateToProps)(Bands)