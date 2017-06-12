import React, { Component } from 'react';

class Band extends Component {
    handleOnClick = (e) => {
        e.preventDefault();
        console.log("ACTION: DELETE_BAND, ID: " + this.props.band.id)
        this.props.store.dispatch({
            type: "DELETE_BAND",
            id: this.props.band.id,
        })
    }
  render() {
    return(
        <li id={this.props.band.id} key={this.props.key}>{this.props.band.text} <button onClick={this.handleOnClick}>X</button></li>
    );
  }
};

export default Band;
