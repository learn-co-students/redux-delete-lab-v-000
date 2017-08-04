import React, { Component } from 'react';

class Band extends Component {
  render() {

  	function handleClick(){
  		this.props.store.dispatch({type: 'DELETE_BAND', id: this.props.band.id})
  	}


    return(
      <div>
        <li>{this.props.band.text} <button onClick={handleClick.bind(this)}>Remove Item</button> </li>

      </div>
    );
  }
};

export default Band;
