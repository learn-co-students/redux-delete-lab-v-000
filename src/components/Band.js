import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <span>{this.props.band}</span><button onClick={()=> props.delete(this.props.band.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
