import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleOnClick}>
          Delete
        </button>
      </div>
    )
  }
};

export default Band








// another solution
// import React, { Component } from 'react';

//const Band = props => {
//    return(
//      <div>
//      	<ul>
//     		 <span>{props.band.bandName}</span><button onClick={() => props.delete(props.band.id)}>DELETE</button>
//      	</ul>
//      </div>
//   );
//}
//
//export default Band;
