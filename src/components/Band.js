import React, { Component } from 'react';

class Band extends Component {
  render() {
    console.log('Props:', this.props.name);
    return (
      <div>
        <li>{this.props.name}</li>
        <button onClick={() => this.props.deleteBand(this.props.id)}>
          DELETE
        </button>
      </div>
    );
  }
}

export default Band;
