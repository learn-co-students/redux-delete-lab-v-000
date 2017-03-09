import React, { Component } from 'react';

class Band extends Component {
  handleOnClick(id) {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: id
    });
  }

  render() {
    console.log(this.props)
    return(
      <div>
        <li>{this.props.text}</li> 
        <button onClick={this.handleOnClick.bind(this, this.props.id)} >
          Delete 
        </button>
      </div>
    );
  }
};

export default Band;