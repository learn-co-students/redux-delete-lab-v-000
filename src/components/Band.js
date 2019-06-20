import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        Band Component
				{this.props.band.name}
				<button onClick={() => this.props.deleteBand(this.props.band)}></button>
      </div>
    );
  }
};

export default Band;
