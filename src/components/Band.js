




import React from 'react'

const Band = props => {

  return (
    <div>
      <li>{props.name }<button onClick={() => props.delete(props.id)}>DELETE</button> </li>
    </div>
  )
}

export default Band;








// import React, { Component } from 'react';
//
// class Band extends Component {
//
//   render() {
//     return(
//       <div>
//         <li>{this.props.name}</li>
//       </div>
//     );
//   }
// };
//
// export default Band;
