import React, { Component } from 'react';

class Band extends Component {

  render() {
    // console.log('this.props in Band:', this.props);
    return(
      <div>
       <li>
         {this.props.name}
       </li> 
       <button>
         DELETE
       </button>
      </div>
    );
  }
};

export default Band;
