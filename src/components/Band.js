import React from 'react';

// class Band extends Component {

//   render() {
//     return(
//       <div>
//         Band Component
//       </div>
//     );
//   }
// };

const Band = props => {
  return (
    <div>
      <span>{props.text}</span>
      <button onClick={() => props.delete(props.text)}>DELETE_BAND</button>
    </div>
  )
}

export default Band;
