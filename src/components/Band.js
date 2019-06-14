import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.props.name}   <button onClick={ () => this.props.deleteBand(this.props.id) }>Delete</button></li>
      </div>
    );
  }
};

export default Band;
