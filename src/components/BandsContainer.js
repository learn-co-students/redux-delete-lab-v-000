import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';
import Band from './Band';



import { connect } from 'react-redux'


// const renderBands = () => this.props.bands.map((band, id) => <Band key={id} text={band}>)

// const renderBands = () => {
//   return this.props.bands.map(band => <Band delete={this.props.deleteBand} key={band.id} band={band} />)
// }



class BandsContainer extends Component {

  // renderBands
  //  renderBands = () => {
  //   return this.props.bands.map(band => <Band delete={this.props.deleteBand} key={band.id} band={band.name} />)
  // }


  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands}  deleteBand={this.props.deleteBand}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })



const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id })
})




export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
