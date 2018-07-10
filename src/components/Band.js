import React, { Component } from 'react';

class Band extends Component {

  handleDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }
  
  render() {
    return(
      <div>
        <li>
          {this.props.band.text}
          <button onClick={this.handleDelete}>remove</button>
        </li>
      </div>
    );
  }
};

export default Band;
