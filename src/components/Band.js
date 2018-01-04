import React, { Component } from 'react';

class Band extends Component {

  handleClick = () =>{
    debugger
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }

  render() {
    return(
      <div>
       <li>{this.props.band.text} - <button onClick={this.handleClick.bind(this)}>Delete</button></li>
      </div>
    );
  }
};

export default Band;
