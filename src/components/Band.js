import React, { Component } from 'react';

class Band extends Component {
  handleDelete = () => {
  	console.log(this.props.band.id)
  	this.props.store.dispatch({
  		type: 'DELETE_BAND',
  		id: this.props.band.id,
  	})
  }
  render() {
    return(
  	<li>{this.props.band.text}
    	<button onClick={this.handleDelete}>Delete</button>
    </li>
    );
  }
};

export default Band;
