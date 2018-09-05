import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.deleteBand(this.props.band.id)
  }


  render() {
    const bandName = this.props.band.name

    return(
      <div>
        <li>{bandName}<button onClick={this.handleClick}>DELETE</button></li>
      </div>
    );
  }
};

export default Band;
