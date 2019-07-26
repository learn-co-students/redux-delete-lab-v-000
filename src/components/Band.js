import React, { Component } from 'react';

class Band extends Component {

  delete = () => {
    this.props.deleteBand(this.props.band.id);
  }
  
  render() {
    return(
      <div>
          <li>{this.props.band.name}</li><button onClick={this.delete}>DELETE</button>
      </div>
    );
  }
};

export default Band;
