import React, { Component } from 'react';

class Band extends Component {
  handleOnClick() {
    this.props.store.dispatch({
      type: "DELETE_BAND", 
      id: this.props.band.id,  
    }); 
  }
  render() {
    return(
      <div>
        <li>{this.props.band.text}</li>
        <button onClick={(event) => this.handleOnClick(event)}/>
      </div>
    );
  }
};

export default Band;
