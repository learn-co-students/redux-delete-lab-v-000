import React, { Component } from 'react'
import Band from './Band';

class Bands extends Component {
  constructor(props) {
    super(props)

  }


  render() {

    let bands = this.props.bands.map(band => <Band band={band} key={band.id} delete={this.props.delete}/>);

    return (
      <div>
        {bands}
      </div>
    );
  }

}

export default Bands;
