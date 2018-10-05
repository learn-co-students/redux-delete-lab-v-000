import React from 'react';
import Band from './Band'

class BandCard extends React.Component {

  renderAllBands = () => {
    return this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} key={band.id} band={band} />)
  }
  render(){
    return (
      <div>
        {this.renderAllBands()}
      </div>
    )
  }
}

export default BandCard
