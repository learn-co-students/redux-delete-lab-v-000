import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
	render() {
		const listBands = this.props.store.getState().bands.map((band, index) => {
			// return <li key={index}>{band.text}</li>
			return <Band band={band} key={index} store={this.props.store} />
		})

    return(
      <ul>
        {listBands}
      </ul>
    );
  }
};

export default Bands;
