import React, { Component } from 'react';

class Band extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
        <li>{this.props.band.name}</li> <button onClick={() => this.props.delete(this.props.band.id)}>Delete</button>
      </div>
    );
  }
};

export default Band;
