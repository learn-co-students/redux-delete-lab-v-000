import React, { Component } from 'react';

class Band extends Component {
  handleDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  };

  render() {
    return(
      <div>
        <li key={this.props.id}>{this.props.band.text}
          <button onClick={this.handleDelete}>Delete</button>
        </li>
      </div>
    );
  }
}

export default Band;
