import React, { Component } from 'react';

class Band extends Component {

  clickHandler = (event) =>{
    event.preventDefault()
    this.props.deleteBand(this.props.id)

  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.clickHandler}>Delete</button>
      </div>
    );
  }
};

export default Band;
