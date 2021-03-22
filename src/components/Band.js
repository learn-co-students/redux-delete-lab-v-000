import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
       <li>
         {this.props.name}
         <span> </span>
        <button onClick={() => this.props.deleteBand(this.props.id)}>
          DELETE
        </button>
       </li> 
      </div>
    );
  }
};

export default Band;
