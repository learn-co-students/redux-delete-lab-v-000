import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li key={this.props.band.id}>
        <span>{this.props.band.name}
          <button 
            onClick={() => this.props.delete(this.props.band.id)} 
          >
            DELETE
          </button>
        </span>
      </li>
    );
  }
};

export default Band;
