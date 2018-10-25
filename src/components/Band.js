import React, { Component } from 'react';
import { connect } from 'react-redux'

class Band extends Component {

  handleDelte = id => {
    this.props.deleteBand(id)
  }

  render() {
    return(
      <li>
        { this.props.name } &nbsp; <button onClick={ () => this.handleDelte(this.props.id) }>DELETE</button>
      </li>
    );
  }
};

export default Band;
