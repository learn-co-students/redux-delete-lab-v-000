import React, { Component } from 'react';

class Band extends Component {

    bands = () => this.props.bands.map((band, index) => {
      return <li key={index}>{band}</li>;
    });
  <span>{band}</span><button onClick={() => props.delete(props.text)}>DELETE</button>

  render() {
    return(
      <div>
      {this.bands()}
      </div>
    );
  }
};


export default Band;
