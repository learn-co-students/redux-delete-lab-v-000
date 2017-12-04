import React, { Component } from 'react';

class Band extends Component {
  render() {
    const band = this.props.band

    let handleOnClick = (event) => {
      event.preventDefault();
      this.props.store.dispatch({
        type: "DELETE_BAND",
        id: this.props.band.id
      })
    }


    return(
      <li>
        {band.text}
        <button id={band.id} onClick={(event) => handleOnClick(event)} >Delete</button>
      </li>
    );
  }
};

export default Band;
