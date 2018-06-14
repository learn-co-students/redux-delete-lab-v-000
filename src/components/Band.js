import React, { Component } from 'react';

class Band extends Component {

  handleOnClick() {
    console.log(this)
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.id,
    });
  }

  render() {
    return (
      <li>
        {this.props.band.text}
        <button onClick={() => this.handleOnClick()} />
      </li>
    );
  }
};

export default Band

//
// import React, { Component } from 'react';
//
// class Band extends Component {
//   render() {
//     return(
//       <div>
//         band component
//       </div>
//     );
//   }
// };
//
// export default Band;
