// import React, { Component } from 'react';
import React from 'react';


// class Band extends Component {
//
//   render() {
//     return(
//       <div>
//         Band Component
//         <li></li><button>Delete</button>
//       </div>
//     );
//   }
// };

const Band = props => {
  console.log("props", props)
  return (
    <div>
      <li>{props.text}</li><button onClick={() => props.deleteBand(props.text)}>delete</button>
    </div>
  )
}

export default Band;
