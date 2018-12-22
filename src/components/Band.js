import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.props.bandName}</li>
        <input value='submit' class='deleteBtn' type="button" onClick={() => this.props.delete(this.props.id)}/>
      </div>
    );
  }
};

export default Band;
 