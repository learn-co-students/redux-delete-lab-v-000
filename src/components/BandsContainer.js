import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux';
import uuid from 'uuid';

class BandsContainer extends Component {
  render() {
    let bandsList = this.props.bands.map(band => <Band key={uuid()} band={band} delete={this.props.deleteBand} />);

    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        
        <ul>
          {bandsList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
