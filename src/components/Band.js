import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    //console.log(this.props.band.id)
    this.props.delete(this.props.band.id)
  }
  render() {
    return(
      <div>
        <li>
          {this.props.band.name}
          <button onClick= {this.handleOnClick}> Delete </button>
        </li>
      </div>
    );
  }
};

export default Band;
