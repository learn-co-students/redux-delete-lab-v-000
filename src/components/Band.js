// import React, { Component } from 'react';
import React from 'react';




const Band = props => {

  function handleOnClick(){
    console.log("handleOnClick")
    console.log("props", props)

    // props.deleteBand(props.id)
    props.delete(props.id)

  }



  console.log("props2", props)

  return (
    <div>
      <li>{props.band}</li><button onClick={() => handleOnClick()}>delete</button>
    </div>
  )
}


export default Band;




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
