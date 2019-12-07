import React, { Component } from 'react';
import BandsContainer from './BandsContainer';


class Band extends Component {
  render() {
  	{console.log(this.props)}
    return(
      <div>
        Band Component
      </div>
    );
  }
};

export default Band;
