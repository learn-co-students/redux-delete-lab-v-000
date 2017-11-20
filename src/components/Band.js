import React, { Component } from 'react';

class Band extends Component {
  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND', 
      id: this.props.band.id
    });
  }

  
  render() {
    return(
       <li>
        Name: {this.props.band.text}
        ID: {this.props.band.id}
        <button onClick={this.handleOnClick} />
        </li> 
    );
  }
};

export default Band;
