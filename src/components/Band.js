import React, { Component } from 'react';

class Band extends Component {        //child of Bands I think. s/get props from Bands
                                        //will get band object w/a name & id & the deleteBand()

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }


  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleOnClick}>Delete </button>
      </div>
    );
  }
};

export default Band;
