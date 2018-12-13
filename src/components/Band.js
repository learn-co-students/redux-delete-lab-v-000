import React, { Component } from 'react';

class Band extends Component {

//handleOnClick = (event) => {
//  event.preventDefault();
//  this.props.deleteBand(this.props.band.id);
//}

  render() {
    //console.log(this.props.band)
    return(
      <div>
        <li>{this.props.band.name}<button onClick={() => this.props.deleteBand(this.props.band.id)}>Delete</button></li>
      </div>
    );
  }
};

export default Band;
