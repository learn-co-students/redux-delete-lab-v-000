import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id,
    })
  }

  render() {
    // console.log(this.props);
    return(
      <div>
        <li id={this.props.band.id}>
          {this.props.band.text}
          <button onClick={this.handleClick}>Delete band</button>
        </li>
      </div>
    );
  }
};

export default Band;
